import React, { Component } from 'react';
// import Link from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import Tweetbtn from './TweetBtn';
import TweetFeed from './TweetFeed';
import '../styles/Feed.css';

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: null,
    };
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
      this.setState({
        posts: res.data.map(tweet => {
          return {
            id: tweet.id,
            content: tweet.body,
            author: tweet.title,
          };
        }),
      });
    });
  }

  addTweet = tweet => {
    tweet.author = this.props.user.username;
    tweet.id = Math.random();
    console.log(tweet);
    const { posts } = this.state;
    const postNew = posts.length ? [tweet, ...posts] : posts;
    this.setState({
      posts: postNew,
    });
  };

  render() {
    return (
      <div className="feed container">
        <Navbar
          user={this.props.user}
          logoutUser={this.props.logoutUser}
          history={this.props.history}
        />
        <Tweetbtn addTweet={this.addTweet} />
        <TweetFeed posts={this.state.posts} />
      </div>
    );
  }
}

export default Feed;
