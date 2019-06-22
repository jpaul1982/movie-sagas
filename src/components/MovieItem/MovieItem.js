import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MovieItem.css';

class MovieItem extends Component {
    render() {
        return (
            <div>
                <span className="eachMovie">
                {this.props.movie.title}
                <img src ={this.props.movie.poster}/>
                <span className="description">{this.props.movie.description}</span>
                </span>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapStateToProps)(MovieItem);