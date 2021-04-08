import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import axios from 'axios';
import createSagaMiddleware from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';

const sagaMiddleware = createSagaMiddleware();

const gifs = ( state = [], action ) => {
    console.log( 'in gifs reducer state:', state );
  if(action.type === 'GET_GIFS') {
    state = action.payload;
  }

    return state;
}

const store = createStore(
    combineReducers({
    gifs,

    }),
    applyMiddleware(sagaMiddleware, logger),
);

ReactDOM.render(

    <Provider store={ store }> 
        <App />
    </Provider>
    , document.getElementById('root'));
