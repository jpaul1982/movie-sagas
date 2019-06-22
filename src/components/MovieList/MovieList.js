import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MovieList.css';
import '../Details/Details';

class MovieList extends Component {

    handleClick = () => {
        console.log(this.props.movie);
        this.props.dispatch({type:'MOVIE_DETAIL', payload:this.props.movie});
        this.props.history.push('/details');

    }

    render() {
        return (
            <div>
                <div className="grid-container">
                <div className='item1'>{this.props.movie.title}</div>
                <img className="item3" value = {this.props.movie.id} alt = "movie-poster" onClick={this.handleClick} src = {this.props.movie.poster}/>
                <div className="item2">{this.props.movie.description}</div>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapStateToProps)(MovieList);