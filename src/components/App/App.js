import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Home from '../Home/Home';
import Details from '../Details/Details';
import MovieList from '../MovieList/MovieList';
import Edit from '../Edit/Edit';
import { HashRouter as Router, Route, } from 'react-router-dom';


class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>

      <div>

        <Route path="/" exact component={Home}/>
        <Route path='/movieList' component={MovieList}/>
        <Route path='/details' component={Details}/>
        <Route path='/edit' component={Edit}/>
      </div>
      </Router>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  reduxState
})

export default connect(mapStateToProps)(App);