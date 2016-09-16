

import { sagaMiddleware } from "./core/saga";

import { toastrSaga } from "./ui/toastr/toastr-saga";
import { apiSaga } from "./core/api/api-saga";
import { authSaga } from "./core/security/authenticate-saga";
import { loginSaga } from "./login/login-saga";
import { i18nSaga } from "./core/i18n/i18n-saga";


export function startApplicationSagas(store) {
    sagaMiddleware.run(toastrSaga);
    sagaMiddleware.run(apiSaga);
    sagaMiddleware.run(authSaga);
    sagaMiddleware.run(loginSaga);
    sagaMiddleware.run(i18nSaga);
}