import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import { sagaMiddleware } from './core/saga';

import { mainReducer } from "./main-reducer";

import { i18nManager } from "./core/i18n";

export const store = createStore(
    mainReducer,
    compose(
        applyMiddleware(thunk, sagaMiddleware, routerMiddleware(browserHistory)),
        (window as any).devToolsExtension ? (window as any).devToolsExtension() : f => f
    )
);

i18nManager.setStore(store);



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

