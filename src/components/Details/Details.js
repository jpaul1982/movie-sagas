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
                Details
                <button onClick={this.handleBackClick}>Back to List</button>
                <button onClick={this.handleEditClick}>Edit</button>
                {/* {this.props.reduxState.movies.map(movie => {
                    return <span>{this.movie.title}</span>
                })} */}
                {/* <Link to='/details' className="link">Details</Link> */}
                <pre>{JSON.stringify(this.props.reduxState.movies, null, 2)}</pre>
            
            </div>

        )
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapStateToProps)(Details);