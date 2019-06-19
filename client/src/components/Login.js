import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';
import '../styles/Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      showPinbox: false
    };
  }

  componentWillMount() {
    // console.log('We are mounted');

    let accessToken = localStorage.getItem('access_token');
    let accessSecret = localStorage.getItem('access_secret');
    // console.log('Token : ', accessToken, ' Secret : ', accessSecret);

    if (accessSecret && accessToken) {
      axios
        .post('/api/auth/twitter/set', {
          token: accessToken,
          secret: accessSecret
        })
        .then(resp => {
          // console.log('RESPONSE: ', resp.data);
        })
        .then(
          this.props.loginUser().then(() => {
            this.props.history.push('/feed');
          })
        );
    } else {
      this.setState({
        showForm: true
      });
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleLogin = e => {
    e.preventDefault();
    axios.get('/api/auth/twitter/url').then(resp => {
      if (resp) {
        // console.log(resp.data.url);
        this.setState({
          showPinbox: true
        });

        window.open(`${resp.data.url}`, '_blank');
      } else {
        // console.log(resp);
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state, this.props);
    this.setState({
      showForm: false
    });
    if (this.state.username !== null) {
      axios
        .post('/api/auth/twitter/login', {
          pin: this.state.pin
        })
        .then(resp => {
          // console.log(resp.data);
          localStorage.setItem('access_token', resp.data.token);
          localStorage.setItem('access_secret', resp.data.secret);
        })
        .finally(
          this.props.loginUser().then(() => {
            this.props.history.push('/feed');
          })
        );
    }
  };

  render() {
    // console.log('STATE : ', this.state, '\nPROPS : ', this.props);

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
          {this.state.showForm ? (
            <form
              onSubmit={e => {
                if (showPinbox) {
                  this.handleSubmit(e);
                } else {
                  this.handleLogin(e);
                }
              }}
            >
              {this.state.showPinbox ? (
                <input
                  type='text'
                  placeholder='PIN provided by Twitter'
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
          ) : (
            'Trying to Login'
          )}
          <Footer />
        </div>
      </div>
    );
  }
}

export default Login;
