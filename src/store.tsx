import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';
import modalReducer from "./modal/modal-reducer";

const mainReducer = combineReducers({
    modal   : modalReducer,
    routing : routerReducer
});

const store = createStore(
    mainReducer,
    applyMiddleware(thunk)
);

export default store;


/*
 store.subscribe( () => {
    console.log("sub : state = ", store.getState());
 });
 */