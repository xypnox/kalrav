import React from 'react';
import '../styles/TweetFeed.css';
import Tweet from './Tweet';
// import Link from 'react-router-dom';

function TweetFeed({ tweets, fetchTweets }) {
  // console.log(tweets);
  const tweetList = tweets ? (
    tweets.map(tweet => {
      // console.log(tweet);
      return <Tweet key={tweet.id} tweet={tweet} />;
    })
  ) : (
    <p>The Tweet feed seems to be empty</p>
  );
  return (
    <div className='TweetFeed-wrapper'>
      <div className='TweetFeed'>{tweetList}</div>
      <div className='MoreTweets'>
        <button className='action-button' onClick={fetchTweets}>
          Get More Tweets
        </button>
      </div>
    </div>
  );
}

export default TweetFeed;
