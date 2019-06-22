import React, { Component } from 'react';
import { connect } from 'react-redux';

class Edit extends Component {
    state = {
        title:"",
        description:""
    }

    handleClick = () => {
        this.props.dispatch({type: `EDIT_MOVIE`})
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
            <div>
            <input onChange={this.handletitleChange} value={this.state.title} placeholder='movie title'></input><br/>
            <textarea onChange={this.handledescriptionChange} value={this.state.description} placeholder='description'></textarea>
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