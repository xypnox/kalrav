from flask import Flask, request, jsonify, Blueprint, session
import tweepy
import os
from os.path import join, dirname
from dotenv import load_dotenv
from flask_session import Session


app = Flask(__name__)
# Check Configuration section for more details
SESSION_TYPE = 'filesystem'
app.config.from_object(__name__)
Session(app)


# @app.route('/set/')
# def set():
#     session['key'] = 'value'
#     return 'ok'


# @app.route('/get/')
# def get():
#     return session.get('key', 'not set')


# Create .env file path.
dotenv_path = join(dirname(__file__), '.env')

# Load file from the path.
load_dotenv(dotenv_path)

con_key = os.getenv('CON_KEY')
con_secret = os.getenv('CON_SECRET')
access_token = os.getenv('ACCESS_TOKEN')
access_token_secret = os.getenv('ACCESS_TOKEN_SECRET')

auth = tweepy.OAuthHandler(con_key, con_secret)
auth.set_access_token(access_token, access_token_secret)
api = tweepy.API(auth)


def filterTextTweets(mixTweets):
    tweets = []
    for tweet in mixTweets:
        if len(tweet.entities['urls']) + len(tweet.entities['user_mentions']) + len(tweet.entities.get('media', [])) == 0:
            tweets.append(tweet._json)
    return tweets


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
from app import views  # noqa
