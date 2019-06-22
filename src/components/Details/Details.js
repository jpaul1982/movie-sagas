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

                {/* {this.props.reduxState.movies.map( movie => {
                    return  <span key ={movie.id}>{movie.title}</span> */}
                {this.props.reduxState.movies.title}
                {this.props.reduxState.genres.name}
                {this.props.reduxState.movies.description}

                   
             
                
                
               
                {/* <pre>{JSON.stringify(this.props.reduxState.movies, null, 2)}</pre> */}
            
            </div>

        )
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapStateToProps)(Details);