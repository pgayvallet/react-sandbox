import * as React from "react";
import { Provider } from 'react-redux';
import { browserHistory, Router, Route } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import ModalPortal from "./modal/modal-portal";
import Home from "./home/Home";

import { Topbar } from "./topbar/topbar";

import store from "./store";

// import * as Promise from "bluebird";

const history = syncHistoryWithStore(browserHistory, store);

class ApplicationLayout extends React.Component<any, any> {

    render() {
        return (
            <div className="app-outside-wrapper">
                <Topbar/>
                <div className="app-inner-wrapper">
                    {this.props.children != null ? this.props.children : <Home/>}
                </div>
                <ModalPortal/>
            </div>
        );
    }
}

export class App extends React.Component<any, any> {

    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Route path="/" component={ApplicationLayout}/>
                </Router>
            </Provider>
        );
    }

}