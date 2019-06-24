import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import { takeEvery, put } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';


function* fetchMovies(action) {
    try {
        const movieResponse = yield axios.get('/api/movies');
        yield put({ type: 'SET_MOVIES', payload: movieResponse.data });
    } catch (error) {
        console.log('Error fetching movies', error);
    }
}

function* movieDetail(action) {
    try {
        const detailResponse = yield axios.get(`/api/movies/genre?id=${action.payload.id}`);
        // const genreResponse = yield axios.get(`/api/genres/details?id=${action.payload.id}`);
        yield put({ type: 'SET_TAGS', payload: detailResponse.data })
        console.log(detailResponse.data);
    } catch (error) {
        console.log('Error fetching details', error);
    }
}

function* updateMovie(action) {
    console.log(action.payload);
    try {
        yield axios.put(`/api/movies/`, action.payload);
        yield put({type:`FETCH_MOVIES`});
        // this.props.reduxState.history.push('/');
    } catch (error) {
        console.log('Error updating movie', error);

    }
}

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchMovies);
    yield takeEvery('MOVIE_DETAIL', movieDetail);
    yield takeEvery('EDIT_MOVIE', updateMovie);
}



// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;


    }
}
const movie = (state = {}, action) => {
    switch (action.type) {
        case 'MOVIE_DETAIL':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        movie,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
    document.getElementById('root'));
registerServiceWorker();
