import React from 'react';
// import Link from 'react-router-dom';
import tweetbtn from './tweetbtn';
import tweetFeed from './tweetFeed';

function Feed() {
  return (
    <div className="feed">
      <navbar />
      <div className="container">
        <h1>Feed</h1>
        <tweetbtn />

        <tweetFeed />
      </div>
    </div>
  );
}

export default Feed;
