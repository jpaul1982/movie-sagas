import React, { Component } from 'react';
import { connect } from 'react-redux';

class Edit extends Component {

    handleClick = () => {
        this.props.dispatch({type: `EDIT_MOVIE`})
    }

    
    render() {
        return (
            <div>
            <input placeholder='movie title'></input>
            <textarea placeholder='description'></textarea>
            <input onClick={this.handleClick} type="submit"></input>
            <pre>{JSON.stringify(this.props.reduxState.movies, null, 2)}</pre>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapStateToProps)(Edit);