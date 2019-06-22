import React, { Component } from 'react';
import './App.css';
import Home from '../Home/Home';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>

      <div className="App">
        <p>Empty Page</p>
        <Link to='/' className="link">Home</Link>
        <Route path="/" exact component={Home}/>
      </div>
      </Router>
    );
  }
}

export default App;
