import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { browserHistory, Router, Route, Link } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import ModalPortal from "./modal/modal-portal";
import { connect } from 'react-redux';
import { Topbar } from "./topbar/topbar";

import store from "./store";

// import * as Promise from "bluebird";

const history = syncHistoryWithStore(browserHistory, store);

class _Home extends React.Component<any, any> {

    render() {
        return (
            <div>
                Ceci est la home !
                <button onClick={this.openPopin.bind(this)}>Ouvrir la popin</button>
            </div>
        );
    }

    openPopin() {
        console.log("open popin");
        console.log(this.props.dispatch, this.props.openTestPopin);
        this.props.openTestPopin();
    }
    
}

import { openModal } from "./modal/modal-action-creators";

const Home = connect(
    () => {
        return {};
    },
    (dispatch) => {
        return {
            openTestPopin : () => dispatch(openModal()),
        };
    })
(_Home);


class App extends React.Component<any, any> {

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

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}/>
        </Router>
    </Provider>,
    document.getElementById("example")
);