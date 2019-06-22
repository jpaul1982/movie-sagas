import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadPartialConfig } from '@babel/core';

class Edit extends Component {
    state = {
        title:"",
        description:""
    }

    handleClick = () => {
        console.log(this.state)
        this.props.dispatch({type: `EDIT_MOVIE`, action: this.state})
    }
    handletitleChange = (event) => {
        console.log(this.state.title);
        this.setState({
            title: event.target.value
        })
        
    }
    handledescriptionChange = (event) => {
        console.log(this.state.description);
        this.setState({
            description: event.target.value
        })
        
    }

    
    render() {
        return (
            <form>
            <input onChange={this.handletitleChange} value={this.state.title} placeholder='movie title'></input><br/>
            <textarea onChange={this.handledescriptionChange} value={this.state.description} placeholder='description'></textarea>
            <input onClick={this.handleClick} type="submit"></input>
            <pre>{JSON.stringify(this.props.reduxState.movies, null, 2)}</pre>
            </form>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapStateToProps)(Edit);