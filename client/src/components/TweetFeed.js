import React from 'react';
import '../styles/TweetFeed.css';
import Tweet from './Tweet';
// import Link from 'react-router-dom';

function TweetFeed({ posts, fetchTweets }) {
  console.log(posts);
  const tweetList = posts ? (
    posts.map(tweet => {
      // console.log(tweet);
      return (
        <Tweet
          key={tweet.id}
          id={tweet.id}
          author={tweet.user.name}
          content={tweet.text}
        />
      );
    })
  ) : (
    <p>No Tweets yet</p>
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
