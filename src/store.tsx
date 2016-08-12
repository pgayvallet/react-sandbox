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
const logger = store => next => action => {

};
*/

/*
 let store = createStore((state, action) => {
 if (action.seqId &&
 (action.status === 'done' || action.status === 'error') &&
 state &&
 state.asyncRequests.indexOf(action.seqId) === -1) {
 return state;
 }
 return reducer(state, action);
 });
 */

/*
 store.subscribe( () => {
    console.log("sub : state = ", store.getState());
 });
 */

