import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import userReducer from "./reducers/user-reducer";

const rootReducer = combineReducers({
    repos: userReducer
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;