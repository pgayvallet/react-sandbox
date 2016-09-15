import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { sagaMiddleware } from './core/saga';

import { mainReducer } from "./main-reducer";

import { i18nManager } from "./core/i18n";

const store = createStore(
    mainReducer,
    compose(
        applyMiddleware(thunk, sagaMiddleware),
        (window as any).devToolsExtension ? (window as any).devToolsExtension() : f => f
    )
);

console.log("**** setStore");
i18nManager.setStore(store);

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

