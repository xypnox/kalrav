import React, { Component } from 'react';
import axios from 'axios';
import '../styles/TweetFeed.css';
import Tweet from './Tweet';
// import Link from 'react-router-dom';

class TweetFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: null,
    };
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
      this.setState({
        posts: res.data,
      });
    });
  }

  render() {
    const tweetList = this.state.posts ? (
      this.state.posts.slice(0, 20).map(tweet => {
        console.log(tweet);

        return (
          <Tweet
            id={tweet.id}
            author={tweet.title.replace(/\s/g, '').slice(0, 8)}
            content={tweet.body.slice(0, 140)}
          />
        );
      })
    ) : (
      <p>No Tweets yet</p>
    );
    return <div className="TweetFeed">{tweetList}</div>;
  }
}

export default TweetFeed;
