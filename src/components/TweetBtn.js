import React, { Component } from 'react';
// import Link from 'react-router-dom';
import '../styles/TweetBtn.css';

class TweetBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }

  handleClick = () => {
    this.setState({
      isActive: true,
    });
  };

  handleSubmit = () => {
    this.setState({
      isActive: false,
    });
  };

  render() {
    if (this.state.isActive) {
      return (
        <div className="tweetbtn active">
          <i className="icon-vector-pencil" />
          <form onSubmit={this.handleSubmit}>
            <textarea rows="5" placeholder="Tweet Something?" autoFocus />
            <button type="submit" className="action-button">
              Tweet
            </button>
          </form>
        </div>
      );
    }
    return (
      <div className="tweetbtn" onClick={this.handleClick}>
        <i className="icon-vector-pencil" />
        <p>Tweet Something?</p>
      </div>
    );
  }
}

export default TweetBtn;
