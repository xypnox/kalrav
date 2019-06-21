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
      posts: null
    };
  }

  fetchTweets = () => {
    fetch('/api/tweets')
      .then(response => {
        return response.json();
      })
      .then(posts => this.setState({ posts: posts.tweets }))
      .finally();
  };

  componentDidMount() {
    this.fetchTweets();
  }

  addTweet = tweet => {
    tweet.author = this.props.user.username;
    tweet.id = Math.random();
    // console.log(tweet);
    const { posts } = this.state;
    const postNew = posts.length ? [tweet, ...posts] : posts;
    this.setState({
      posts: postNew
    });
  };

  render() {
    console.log(this.state.posts);
    if (this.props.user) {
      return (
        <div className='feed container'>
          <Navbar
            user={this.props.user}
            logoutUser={this.props.logoutUser}
            history={this.props.history}
          />
          <Tweetbtn addTweet={this.addTweet} />
          {this.state.posts ? (
            <TweetFeed
              posts={this.state.posts}
              fetchTweets={this.fetchTweets}
            />
          ) : (
            'No Tweets yet'
          )}
        </div>
      );
    }
    return <Redirect to='/login' />;
  }
}

export default Feed;
