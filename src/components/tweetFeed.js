import React from 'react';
// import Link from 'react-router-dom';

function tweetFeed({ tweets }) {
  const tweetList = tweets.length ? (
    tweets.map(tweet => {
      return (
        <div className="tweet">
          <div className="author">{tweet.author}</div>
          <div className="author">{tweet.content}</div>
        </div>
      );
    })
  ) : (
    <p> Loading Tweets </p>
  );

  return <div className="tweetFeed">{tweetList}</div>;
}

export default tweetFeed;
