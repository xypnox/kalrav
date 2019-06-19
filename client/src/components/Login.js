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
      if (resp) {
        resp.json().then(data => {
          console.log(data['url']);
          this.setState({
            showPinbox: true
          });

          window.open(`${data['url']}`, '_blank');
        });
      } else {
        console.log(resp);
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state, this.props);
    if (this.state.username !== null) {
      axios
        .post('/api/auth/twitter/login', {
          pin: this.state.pin
        })
        .then(resp => {
          console.log(resp.data);
          localStorage.setItem('access', JSON.stringify(resp.data));
        });

      // fetch('/api/auth/twitter/login', {
      //   method: 'GET',
      //   headers: {
      //     Accept: 'application/json',
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify({ pin: this.state.pin })
      // })
      //   .then(resp => {
      //     if (resp) {
      //       resp.json().then(data => {
      //         localStorage['access'] = data;
      //       });
      //     } else {
      //       console.log(resp);
      //     }
      //   })
      //   .finally(this.props.history.push('/feed'));
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
          <Footer />
        </div>
      </div>
    );
  }
}

export default Login;
