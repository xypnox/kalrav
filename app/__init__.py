from flask import Flask, request, jsonify, Blueprint, session, abort
import tweepy
import os
from os.path import join, dirname
from dotenv import load_dotenv
from flask_session import Session


from app.helpers import filterTextTweets


if os.getenv('REACT_LOCAL') == "TRUE":
    app = Flask(__name__)
    print("Run React Server to test frontend")
else:
    # set the project root directory as the static folder, you can set others.
    app = Flask(__name__,
                static_url_path='',
                static_folder='../client/build')

    @app.route('/', defaults={'path': ''})
    @app.route('/<path:path>')
    def catch_all(path):
        return app.send_static_file('index.html')


# Check Configuration section for more details
SESSION_TYPE = 'filesystem'
app.config.from_object(__name__)
Session(app)

# Create .env file path.
dotenv_path = join(dirname(__file__), '.env')

# Load file from the path.
load_dotenv(dotenv_path)

con_key = os.getenv('CON_KEY')
con_secret = os.getenv('CON_SECRET')


auth = tweepy.OAuthHandler(con_key, con_secret, 'oob')
api = tweepy.API(auth)


bp = Blueprint('blueprint', __name__, template_folder='templates')


@bp.route("/auth/twitter/url", methods=["GET"])
def authTwitter():
    try:
        redirect_url = {
            "url": auth.get_authorization_url()
        }
        session['request_token'] = auth.request_token['oauth_token']

        return jsonify(redirect_url), 200

    except tweepy.TweepError as error:
        print(error)
        return jsonify(None), 404


@bp.route("/auth/twitter/login", methods=["POST"])
def loginTwitter():
    pincode = request.get_json()['pin']
    token = session['request_token']
    session['request_token'] = None
    auth.request_token = {'oauth_token': token,
                          'oauth_token_secret': pincode}

    try:
        auth.get_access_token(pincode)

        authAccess = {
            "token": auth.access_token,
            "secret": auth.access_token_secret
        }

        return jsonify(authAccess), 200

    except tweepy.TweepError:
        return jsonify(None), 404


@bp.route("/auth/twitter/set", methods=["POST"])
def setAccessKeys():
    try:
        data = request.get_json()
        token = data['token']
        secret = data['secret']
        auth.set_access_token(token, secret)

        return jsonify(True), 200
    except:
        return jsonify(False), 401


@bp.route("/get/user")
def userInfo():
    try:
        user = api.me()
        data = {
            'username': user.screen_name,
            'profile_image_url': user.profile_image_url
        }
        return jsonify(data), 200
    except:
        return jsonify("You have bad credentials"), 401


@bp.route("/error_handler")
def eroorororo():
    return jsonify(None), 404


@bp.route("/", methods=["GET"])
def index():
    return jsonify(message="Hello World!"), 200


@bp.route("/test", methods=["GET"])
def test():
    return jsonify(message=True), 200


@bp.route("/tweets", methods=["GET"])
def tweets():
    public_tweets = api.home_timeline(count=200)
    tweets = [tweet._json for tweet in public_tweets]
    # print(public_tweets)
    return jsonify(tweets=tweets)


@bp.route("/tweets/<int:tweet_id>", methods=["GET"])
def tweets_by_Id(tweet_id=0):
    if tweet_id != 0:
        public_tweets = api.home_timeline(count=200, max_id=tweet_id)
    else:
        public_tweets = api.home_timeline(count=200)
    tweets = [tweet._json for tweet in public_tweets]
    # print(public_tweets)
    return jsonify(tweets=tweets)


@bp.route("/like/<int:tweet_id>", methods=["GET"])
def likeTweet(tweet_id):
    try:
        api.create_favorite(tweet_id)
        return jsonify(True), 200
    except:
        return jsonify("Bad Credentials"), 401


@bp.route("/like/remove/<int:tweet_id>", methods=["GET"])
def unlikeTweet(tweet_id):
    try:
        api.destroy_favorite(tweet_id)
        return jsonify(True), 200
    except:
        return jsonify("Bad Credentials"), 401


app.register_blueprint(bp, url_prefix='/api')


app.config['SECRET_KEY'] = os.getenv('SECRET_KEY') or \
    'e5ac358c-f0bf-11e5-9e39-d3b532c10a28'
