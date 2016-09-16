import { call, take, put, fork } from 'redux-saga/effects';
import { delay } from 'redux-saga'

import { sagaMiddleware } from "./core/saga";

import { toastrSaga } from "./ui/toastr/toastr-saga";
import { apiSaga } from "./core/api/api-saga";
import { authSaga } from "./core/security/authenticate-saga";
import { loginSaga } from "./login/login-saga";
import { i18nSaga } from "./core/i18n/i18n-saga";
import {setLocale} from "./core/i18n/i18n-action-creators";
import {authRequest} from "./core/security/auth-action-creators";
import {AUTH_SUCCESS} from "./core/security/auth-action-types";
import {getDefaultHeaders} from "./core/http/client-config";


export function startApplicationSagas(store) {

    // scheduler sagas
    sagaMiddleware.run(toastrSaga);
    sagaMiddleware.run(apiSaga);
    sagaMiddleware.run(authSaga);
    sagaMiddleware.run(loginSaga);
    sagaMiddleware.run(i18nSaga);

    // application bootstrap
    sagaMiddleware.run(bootstrapSaga);
}



function* bootstrapSaga() : any {

    // TODO : perform authentication before that.

    yield put(authRequest());

    console.log("*** before authSuccess", getDefaultHeaders());

    yield take(AUTH_SUCCESS);

    console.log("*** before setLocale", getDefaultHeaders());

    yield put(setLocale("fr_FR"))
}