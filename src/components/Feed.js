import React from 'react';
// import Link from 'react-router-dom';
import Navbar from './Navbar';
import Tweetbtn from './TweetBtn';
import TweetFeed from './TweetFeed';
import '../styles/Feed.css';

function Feed() {
  return (
    <div className="feed container">
      <Navbar status="Logged" />
      <Tweetbtn />
      <TweetFeed />
    </div>
  );
}

export default Feed;
