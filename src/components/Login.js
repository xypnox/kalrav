import React, { Component } from 'react';
// import Link from 'react-router-dom';
import Navbar from './Navbar';

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
      <div className="login-form">
        <Navbar />
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" onChange={this.handleChange} />

          <label htmlFor="username">Password</label>
          <input id="password" onChange={this.handleChange} type="password" />

          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;
