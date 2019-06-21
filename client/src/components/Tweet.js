import React, { Component } from 'react';
import Linkify from 'react-linkify';
// import Link from 'react-router-dom';
import '../styles/Tweet.css';
import TweetBtn from './TweetBtn';

class Tweet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: false,
      showReply: false,
      isRetweet: false
    };
  }

  handleClickReply = e => {
    if (!this.state.showReply) {
      this.setState({
        showReply: true
      });
    } else {
      this.setState({
        showReply: false
      });
    }
  };

  handleClickLike = e => {
    if (!this.state.isLiked) {
      this.setState({
        isLiked: true
      });
    } else {
      this.setState({
        isLiked: false
      });
    }
  };

  handleClickRetweet = e => {
    if (!this.state.isRetweet) {
      this.setState({
        isRetweet: true
      });
    } else {
      this.setState({
        isRetweet: false
      });
    }
  };

  addTweet = e => {
    if (this.state.showReply) {
      this.setState({
        showReply: false
      });
    }
  };

  render() {
    const { tweet } = this.props;
    let tweetContent = tweet.text;
    const replyBox = this.state.showReply ? (
      <TweetBtn placeholder='Reply to this tweet' addTweet={this.addTweet} />
    ) : (
      <div />
    );
    if (tweet.entities.media) {
      tweetContent = tweet.text.subString(0, tweet.text.length - 23);
    }
    const likeClass = this.state.isLiked ? 'isLiked' : '';
    const replyClass = this.state.showReply ? 'isReply' : '';
    const retweetClass = this.state.isRetweet ? 'isRetweet' : '';
    return (
      <div className='Tweet' key={`tweet-${tweet.id}`}>
        <div className='author'>{tweet.user.name}</div>
        <Linkify
          properties={{
            target: '_blank'
          }}
        >
          <div className='content'>{tweetContent}</div>
        </Linkify>

        {tweet.entities.media ? (
          <div className='media'>
            <img src={tweet.entities.media[0].media_url} alt='' />
          </div>
        ) : null}
        <div className='tweetActions'>
          <button
            type='button'
            onClick={this.handleClickLike}
            className={likeClass}
          >
            <i className='icon-heart' />
          </button>
          <button
            type='button'
            onClick={this.handleClickRetweet}
            className={retweetClass}
          >
            <i className='icon-retweet-1' />
          </button>
          <button
            type='button'
            onClick={this.handleClickReply}
            className={replyClass}
          >
            <i className='icon-comment' />
          </button>
          {replyBox}
        </div>
      </div>
    );
  }
}

export default Tweet;
