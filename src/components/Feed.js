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
        posts: res.data.map(post => {
          return {
            id: post.id,
            content: post.body,
            author: post.title,
          };
        }),
      });
    });
  }

  addTweet = tweet => {
    tweet.author = 'ramesh';
    tweet.id = Math.random();
    const { posts } = this.state;
    const postNew = posts.length ? [tweet, ...posts] : posts;
    this.setState({
      posts: postNew,
    });
  };

  render() {
    return (
      <div className="feed container">
        <Navbar status="Logged" />
        <Tweetbtn addTweet={this.addTweet} />
        <TweetFeed posts={this.state.posts} />
      </div>
    );
  }
}

export default Feed;
