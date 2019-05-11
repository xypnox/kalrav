import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="login">
        <div className="container">
          <Navbar />
          <h1>Login</h1>
          <form onSubmit={this.handleSubmit}>
            <input id="username" onChange={this.handleChange} type="text" placeholder="Username" />

            <input
              id="password"
              onChange={this.handleChange}
              type="password"
              placeholder="Password"
            />

            <button type="button" className="action-button">
              Login via <i className="icon-twitter" />
            </button>
          </form>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Login;
