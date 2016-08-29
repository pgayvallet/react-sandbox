import { call, take, put, fork } from 'redux-saga/effects';

import { httpClient } from "../core/http";
import { LOGIN_REQUIRED, LOGIN_REQUEST } from "../core/security/auth-action-types";
import { loginSuccess, loginError} from "../core/security/auth-action-creators";
import { openLoginDialog } from "./login-dialog";
import {LoginRequest} from "../core/security/auth-model";
import {Action} from "../core/actions/Action";
import AxiosXHR = Axios.AxiosXHR;



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

    const loginAction : Action<LoginRequest> = yield take(LOGIN_REQUEST);
    const loginRequest : LoginRequest = loginAction.payload;

    console.log("login attempt : ", loginRequest);

    try {
        let response : AxiosXHR<any> = yield doPerformLoginRequest(loginRequest.login, loginRequest.password);
        if(response.data.success === true) {
            yield put(loginSuccess(response.data));
        } else {
            yield put(loginError(response.data));

        }
        // TODO : loop until success 
    } catch(e) {
        // TODO : handle
        console.log("user login -> error : ", e);
    }


    // TODO
}

function doPerformLoginRequest(username : string, password : string) {
    return httpClient.post("/rest/authentication/login", { email: username, password : password }, {
        headers : { "Content-Type" : "application/x-www-form-urlencoded" } // required for tael login.
    })
}