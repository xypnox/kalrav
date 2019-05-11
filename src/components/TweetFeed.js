import React from 'react';
import '../styles/TweetFeed.css';
import Tweet from './Tweet';
// import Link from 'react-router-dom';

function TweetFeed({ posts }) {
  // console.log(posts);
  const tweetList = posts ? (
    posts.slice(0, 20).map(tweet => {
      // console.log(tweet);
      return (
        <Tweet
          id={tweet.id}
          author={tweet.author.replace(/\s/g, '').slice(0, 8)}
          content={tweet.content.slice(0, 140)}
        />
      );
    })
  ) : (
    <p>No Tweets yet</p>
  );
  return <div className="TweetFeed">{tweetList}</div>;
}

export default TweetFeed;
