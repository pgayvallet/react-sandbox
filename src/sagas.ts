

import { sagaMiddleware } from "./core/saga";

import { toastrSaga } from "./ui/toastr/toastr-saga";
import { apiSaga } from "./core/api/api-saga";
import { authSaga } from "./core/security/authenticate-saga";
import { loginSaga } from "./login/login-saga";


export function startApplicationSagas(store) {
    sagaMiddleware.run(toastrSaga, store.getState);
    sagaMiddleware.run(apiSaga, store.getState);
    sagaMiddleware.run(authSaga, store.getState);
    sagaMiddleware.run(loginSaga, store.getState);
}