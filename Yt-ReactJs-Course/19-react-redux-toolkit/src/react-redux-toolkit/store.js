import {configureStore} from '@reduxjs/toolkit'
import countReducer from './counterSlice.js'
export const store = configureStore({
    reducer:{
        counter:countReducer
    }
});

export default store;