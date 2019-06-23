import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {

    handleBackClick = () => {
        this.props.history.push('/');
    }
    handleEditClick = () => {
        this.props.history.push('/edit');
    }

    render() {
        return (


            <div>
                <button onClick={this.handleBackClick}>Back to List</button>
                <button onClick={this.handleEditClick}>Edit</button>
                <br />
                <div className="grid-container">
                    <div className='item1'>{this.props.reduxState.movie.title}</div>
                    <div>{this.props.reduxState.genres.name}</div>
                    <img className="item3" value={this.props.reduxState.movie.id} alt="movie-poster" onClick={this.handleClick} src={this.props.reduxState.movie.poster} />
                    <div className="item2">{this.props.reduxState.movie.description}</div>
                </div>
                <pre>{JSON.stringify(this.props.reduxState.genres, null, 2)}</pre>
            </div>











        )
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapStateToProps)(Details);