import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieList from '../MovieList/MovieList';


class Home extends Component {

    componentDidMount() {
        this.getMovies();
    }
    
    getMovies() {
        this.props.dispatch({ type: 'FETCH_MOVIES' });
    }


    render() {
        return (
            <div>
                {this.props.reduxState.movies.map( movie => {
                    return <MovieList movie={movie} history={this.props.history} key={movie.id} />
                })}
            </div>
            
        )
    }
}


const mapStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapStateToProps)(Home);