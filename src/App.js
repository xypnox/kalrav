import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Feed from './components/Feed';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/feed" component={Feed} />
        <Route exact path="/about" component={About} />
      </div>
    </BrowserRouter>
  );
}

export default App;
