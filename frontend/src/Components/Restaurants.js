import React from 'react';
import '../App.css';

import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import { restaurantsReducer } from '../Reducers/Restaurants'
import Restaurantsnew from '../Components/Restaurantsnew'

export const rootReducer = combineReducers({ restaurants: restaurantsReducer })
export const store = createStore(rootReducer, applyMiddleware(logger, thunk))

function Restaurants() {
  return (


    <div>
 <br/> <h2>Render Restaurants</h2> 

      <Provider store={store}>
            <Restaurantsnew />
      </Provider>
    </div>
  );
}

export default Restaurants;
