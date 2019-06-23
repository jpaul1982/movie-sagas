import React, { Component } from 'react';
import { connect } from 'react-redux';

class DetailMap extends Component {
    render() {
        return (
            <div>

           {this.props.reduxState.genres.map(genre => {
               return <Details genre={genre} key={genre.id}/>
           })}

           </div>
        )
    }
}


const mapStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapStateToProps)(DetailMap);