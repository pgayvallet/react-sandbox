import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';
import { sagaMiddleware } from './core/saga';

import modalReducer from "./ui/modal/modal-reducer";
import { toastrReducer } from "./ui/toastr/toastr-reducer";
import { apiReducer } from "./core/api/api-reducer"


const mainReducer = combineReducers({
    api     : apiReducer,
    modal   : modalReducer,
    toastr  : toastrReducer,
    routing : routerReducer
});

const store = createStore(
    mainReducer,
    compose(
        applyMiddleware(thunk, sagaMiddleware),
        (window as any).devToolsExtension ? (window as any).devToolsExtension() : f => f
    )
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

