# twitter.py
from os.path import join, dirname
import os
from dotenv import load_dotenv

# Create .env file path.
dotenv_path = join(dirname(__file__), '.env')

# Load file from the path.
load_dotenv(dotenv_path)

con_key = os.getenv('CON_KEY')
con_secret = os.getenv('CON_SECRET')
