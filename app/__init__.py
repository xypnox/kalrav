from flask import Flask, request, jsonify, Blueprint, session, abort
import tweepy
import os
from os.path import join, dirname
from dotenv import load_dotenv
from flask_session import Session


from app.helpers import filterTextTweets

app = Flask(__name__)
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


def getTweets():
    maxId = session.get('id',  0)
    if maxId != 0:
        public_tweets = api.home_timeline(count=200, max_id=maxId)
        session['id'] = public_tweets[-1].id
        tweets = session['tweets']
        session['tweets'] = tweets + filterTextTweets(public_tweets)

    else:
        public_tweets = api.home_timeline(count=200)
        tweets = session['tweets'] = filterTextTweets(public_tweets)
        session['id'] = public_tweets[-1].id


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
        return jsonify(error), 404


@bp.route("/auth/twitter/login", methods=["GET"])
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


@bp.route("/error_handler")
def eroorororo():
    return jsonify(None), 404


@bp.route("/", methods=["GET"])
def index():
    return jsonify(message="Hello World!"), 200


@bp.route("/tweets", methods=["GET"])
def tweets():
    getTweets()
    tweets = session['tweets']
    return jsonify(tweets=tweets)


app.register_blueprint(bp, url_prefix='/api')

app.config['SECRET_KEY'] = os.getenv('SECRET_KEY') or \
    'e5ac358c-f0bf-11e5-9e39-d3b532c10a28'
