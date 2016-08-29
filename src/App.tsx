import * as React from "react";
import { Provider } from 'react-redux';
import { browserHistory, Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import store from "./store";
import { routes } from "./routes";
// import * as Promise from "bluebird";

const history = syncHistoryWithStore(browserHistory, store);

// init sagas
import { sagaMiddleware } from "./core/saga";
import { toastrSaga } from "./ui/toastr/toastr-saga";
import { apiSaga } from "./core/api/api-saga";
sagaMiddleware.run(toastrSaga, store.getState);
sagaMiddleware.run(apiSaga, store.getState);
// end

export class App extends React.Component<any, any> {

    render() {
        return (
            <Provider store={store}>
                <Router history={history} routes={routes}/>
            </Provider>
        );
    }

}