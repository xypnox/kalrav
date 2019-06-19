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

  loginUser = () => {
    // Get the current 'global' time from an API using Promise
    return new Promise(() => {
      // console.log('Logging In user: ', user);
      if (this.state.user == null) {
        axios.get('/api/get/user').then(resp => {
          console.log(resp.data);
          this.setState({
            user: {
              username: resp.data.username,
              profileImage: resp.data.profile_image_url
            }
          });
        });
      }
    });
  };

  logoutUser = () => {
    const { user } = this.state;
    return new Promise(() => {
      // console.log('Logging Out user: ', this.state.user);
      if (user) {
        this.setState({
          user: null
        });
      }
    });
  };

  render() {
    // console.log('The state is: ', this.state);
    const { user, data } = this.state;

    console.log(user, data);

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
