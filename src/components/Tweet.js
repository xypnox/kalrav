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
          <i className="icon-heart" />
        </button>
        <button type="button">
          <i className="icon-retweet-1" />
        </button>
        <button type="button">
          <i className="icon-comment" />
        </button>
      </div>
    </div>
  );
}

export default Tweet;
