import React from 'react';
// import Link from 'react-router-dom';
import '../styles/TweetBtn.css';
import penTool from '../images/icons/pen-tool.svg';

function TweetBtn() {
  return (
    <div className="tweetbtn">
      <img src={penTool} alt="pen-icon" />
      <p>Tweet Something?</p>
    </div>
  );
}

export default TweetBtn;
