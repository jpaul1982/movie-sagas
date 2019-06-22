import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';


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
                {this.props.reduxState.movies.map(movie=> {
                    return <MovieItem movie={movie} history={this.props.history} key={movie.id} />
                })}
                {/* <Link to='/details' className="link">Details</Link> */}
                {/* <pre>{JSON.stringify(this.props.reduxState.movies, null, 2)}</pre> */}
            </div>
            
        )
    }
}


const mapStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapStateToProps)(Home);