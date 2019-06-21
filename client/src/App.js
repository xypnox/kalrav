import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Feed from './components/Feed';
import About from './components/About';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      data: null
    };
  }

  componentDidMount = () => {
    fetch('/api/')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  };

  loginUser = pin => {
    // Get the current 'global' time from an API using Promise
    // console.log('Logging In user: ', user);
    if (this.state.user == null && pin != null) {
      axios
        .post('/api/auth/twitter/login', {
          pin: pin
        })
        .then(resp => {
          localStorage.setItem('access_token', resp.data.token);
          localStorage.setItem('access_secret', resp.data.secret);
        })
        .finally(() => {
          axios.get('/api/get/user').then(resp => {
            // console.log(resp.data);
            this.setState({
              user: {
                username: resp.data.username,
                profileImage: resp.data.profile_image_url
              }
            });
          });
        });
      // var interval = setInterval(()=> {

      // })
    } else if (this.state.user == null) {
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
          .finally(() => {
            axios.get('/api/get/user').then(resp => {
              // console.log(resp.data);
              this.setState({
                user: {
                  username: resp.data.username,
                  profileImage: resp.data.profile_image_url
                }
              });
            });
          });
      } else {
        return false;
      }
    }
  };

  logoutUser = () => {
    const { user } = this.state;
    return new Promise(() => {
      // console.log('Logging Out user: ', this.state.user);
      if (user) {
        this.setState({
          user: null
        });
        localStorage.clear();
      }
    });
  };

  render() {
    // console.log('The state is: ', this.state);
    const { user, data } = this.state;

    // console.log(user, data);

    return (
      <BrowserRouter>
        <div className='App'>
          <Route exact path='/' component={Home} />

          <Route
            exact
            path='/login'
            render={props => (
              <Login
                {...props}
                user={user}
                loginUser={this.loginUser}
                logoutUser={this.logoutUser}
              />
            )}
          />

          <Route
            exact
            path='/feed'
            render={props => (
              <Feed {...props} user={user} logoutUser={this.logoutUser} />
            )}
          />

          <Route
            exact
            path='/about'
            render={props => (
              <About {...props} user={user} logoutUser={this.logoutUser} />
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
