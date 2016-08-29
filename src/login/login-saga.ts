import { call, take, put, fork } from 'redux-saga/effects';

import { LOGIN_REQUIRED } from "../core/security/auth-action-types";
import { openLoginDialog } from "./login-dialog";



export function* loginSaga() : any {

    function* userLoginScheduler() : any {
        while(true) {
            yield take(LOGIN_REQUIRED);
            yield performUserLogin();
        }
    }

    yield [
        call(userLoginScheduler)
    ];
}

/**
 * Performs the whole user login scenario : opens the popin, performs the login 
 * and handles the success or error from the server
 */
function* performUserLogin() : any {
    yield put(openLoginDialog());
    // TODO
}