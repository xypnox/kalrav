import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
// import axios from 'axios';
import Navbar from './Navbar';
import Tweetbtn from './TweetBtn';
import TweetFeed from './TweetFeed';
import '../styles/Feed.css';

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: null
    };
  }

  fetchTweets = (getNew = false) => {
    let tweets = JSON.parse(localStorage.getItem('tweets'));

    if (getNew) {
      fetch('/api/tweets')
        .then(response => {
          return response.json();
        })
        .then(data => this.setState({ tweets: data.tweets }))
        .finally();
    } else {
      if (tweets) {
        this.setState({
          tweets: tweets
        });
      }
    }
  };

  componentDidMount() {
    this.fetchTweets();
  }

  addTweet = tweet => {
    tweet.author = this.props.user.username;
    tweet.id = Math.random();
    // console.log(tweet);
    const { tweets } = this.state;
    const postNew = tweets.length ? [tweet, ...tweets] : tweets;
    this.setState({
      tweets: postNew
    });
  };

  render() {
    console.log(this.state.tweets);
    if (this.props.user) {
      return (
        <div className='feed container'>
          <Navbar
            user={this.props.user}
            logoutUser={this.props.logoutUser}
            history={this.props.history}
          />
          <Tweetbtn addTweet={this.addTweet} />
          {this.state.tweets ? (
            <TweetFeed
              tweets={this.state.tweets}
              fetchTweets={this.fetchTweets}
            />
          ) : (
            'Fetching Tweets...'
          )}
        </div>
      );
    }
    return <Redirect to='/login' />;
  }
}

export default Feed;
