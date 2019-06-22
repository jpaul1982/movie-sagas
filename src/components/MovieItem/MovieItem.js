import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MovieItem.css';

class MovieItem extends Component {

    handleClick = () => {
        console.log(this.props.history);
        this.props.history.push('/details');
    }

    render() {
        return (
            <div>
                <div className="grid-container">
                <div className='item1'>{this.props.movie.title}</div>
                <img className="item3" onClick={this.handleClick} src ={this.props.movie.poster}/>
                <div className="item2">{this.props.movie.description}</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapStateToProps)(MovieItem);