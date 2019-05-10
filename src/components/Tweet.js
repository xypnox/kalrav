import React from 'react';
// import Link from 'react-router-dom';
import '../styles/Tweet.css';

function Tweet({ id, author, content }) {
  return (
    <div className="Tweet" key={id}>
      <div className="author">{author}</div>
      <div className="content">{content}</div>
      <div className="tweetActions">
        <button type="button">
          <img src={like} alt="Like" />
        </button>
        <button type="button">
          <img src={retweet} alt="Retweet" />
        </button>
        <button type="button">
          <img src={reply} alt="Reply" />
        </button>
      </div>
    </div>
  );
}

export default Tweet;
