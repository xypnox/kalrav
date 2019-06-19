import React, { Component } from 'react';
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
    const { id, author, content } = this.props;
    const replyBox = this.state.showReply ? (
      <TweetBtn placeholder='Reply to this tweet' addTweet={this.addTweet} />
    ) : (
      <div />
    );
    const likeClass = this.state.isLiked ? 'isLiked' : '';
    const replyClass = this.state.showReply ? 'isReply' : '';
    const retweetClass = this.state.isRetweet ? 'isRetweet' : '';
    return (
      <div className='Tweet' key={id}>
        <div className='author'>{author}</div>
        <div className='content'>{content}</div>
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
