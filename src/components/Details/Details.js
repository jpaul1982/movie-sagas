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
                    
                    {this.props.reduxState.genres.map(genre => {
               return <div className="item4">{genre.name}</div> 
           })}
           <br/>
                 
                    
                    <img className="item3" value={this.props.reduxState.movie.id} alt="movie-poster" src={this.props.reduxState.movie.poster} />
                    <div className="item2">{this.props.reduxState.movie.description}</div>
                </div>
                <pre>{JSON.stringify(this.props.reduxState.genres.name, null, 2)}</pre>
            </div>











        )
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapStateToProps)(Details);