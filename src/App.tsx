import * as React from "react";
import { Provider } from 'react-redux';
import { browserHistory, Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import { store } from "./store";
import { routes } from "./routes";
// import * as Promise from "bluebird";

const history = syncHistoryWithStore(browserHistory, store);

import { startApplicationSagas } from "./sagas";

startApplicationSagas(store);

export class App extends React.Component<any, any> {

    render() {
        return (
            <Provider store={store}>
                <Router history={history} routes={routes}/>
            </Provider>
        );
    }

}