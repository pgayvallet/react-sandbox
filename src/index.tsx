import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux'
//noinspection TypeScriptCheckImport
import { browserHistory, Router, Route, Link, withRouter } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import { Topbar } from "./topbar/topbar";

let initialState : any = {};

const todo = (state : any = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state
            }
            return Object.assign({}, state, {
                completed: !state.completed
            });
        default:
            return state
    }
};

// import * as Promise from "bluebird";

const mainReducer = combineReducers({
    todo,
    routing : routerReducer
});

const store = createStore(mainReducer);


store.subscribe( () => {

    console.log("sub : state = ", store.getState());

});

const history = syncHistoryWithStore(browserHistory, store);


class Home extends React.Component<any, any> {

    render() {
        return (
            <div>
                Ceci est la home !
            </div>
        );
    }

}

class App extends React.Component<any, any> {
    render() {
        return (
            <div className="app-outside-wrapper">
                <Topbar/>
                <div className="app-inner-wrapper">
                    {this.props.children != null ? this.props.children : <Home/>}
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}/>
        </Router>
    </Provider>,
    document.getElementById("example")
);