import * as React from "react";
import { Provider } from 'react-redux';
import { browserHistory, Router, Route } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import ModalPortal from "./modal/modal-portal";
import Home from "./home/Home";
import { Topbar } from "./topbar/topbar";
import { ToastrDeck } from "./ui/toastr/toastr-deck";

import store from "./store";

// import * as Promise from "bluebird";

const history = syncHistoryWithStore(browserHistory, store);

// init sagas
import { sagaMiddleware } from "./core/saga";
import { toastrSaga } from "./ui/toastr/toastr-saga";
import { apiSaga } from "./core/api/api-saga";
sagaMiddleware.run(toastrSaga, store.getState);
sagaMiddleware.run(apiSaga, store.getState);
// end

class ApplicationLayout extends React.Component<any, any> {

    render() {
        return (
            <div className="app-outside-wrapper">
                <Topbar/>
                <div className="app-inner-wrapper">
                    {this.props.children != null ? this.props.children : <Home/>}
                </div>
                <ModalPortal/>
                <ToastrDeck/>
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