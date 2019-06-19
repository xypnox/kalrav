import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPinbox: false
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleLogin = e => {
    e.preventDefault();
    fetch('/api/auth/twitter/url').then(resp => {
      resp.json().then(data => {
        console.log(data);
      });
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state, this.props);
    if (this.state.username !== null) {
      // this.props.loginUser(this.state);
    }
  };

  render() {
    console.log('STATE : ', this.state, '\nPROPS : ', this.props);

    if (this.props.user) {
      return <Redirect to='/feed' />;
    }

    const { showPinbox } = this.state;
    return (
      <div className='login'>
        <div className='container'>
          <Navbar
            user={this.props.user}
            logoutUser={this.props.logoutUser}
            history={this.props.history}
          />
          <h1>Login</h1>
          <form
            onSubmit={e => {
              if (showPinbox) {
                this.handleSubmit(e);
              } else {
                console.log('handleing login');
                this.handleLogin(e);
              }
            }}
          >
            {this.state.showPinbox ? (
              <input
                type='text'
                className='pinbox'
                id='pin'
                onChange={this.handleChange}
              />
            ) : (
              ' '
            )}
            <button type='submit' className='action-button'>
              Login via <i className='icon-twitter' />
            </button>
          </form>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Login;
