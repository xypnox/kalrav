import React, { Component } from 'react';
// import Link from 'react-router-dom';
import '../styles/TweetBtn.css';

class TweetBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      content: null,
    };
  }

  handleClick = () => {
    this.setState({
      isActive: true,
    });
  };

  handleChange = e => {
    this.setState({
      content: e.target.value,
    });
  };

  handleSubmit = () => {
    if (this.state.content !== null) {
      this.props.addTweet({ content: this.state.content });
    }
    this.setState({
      isActive: false,
      content: null,
    });
  };

  render() {
    if (this.state.isActive) {
      return (
        <div className="tweetbtn active">
          <i className="icon-vector-pencil" />
          <form onSubmit={this.handleSubmit}>
            <textarea
              rows="5"
              placeholder="Tweet Something?"
              autoFocus
              onChange={this.handleChange}
            />
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
