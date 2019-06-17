from flask import Flask
from app.views import bp

app = Flask(__name__)

app.register_blueprint(bp, url_prefix='/api')

from app import views  # noqa
