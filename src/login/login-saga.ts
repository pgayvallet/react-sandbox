import { call, take, put, fork } from 'redux-saga/effects';
import * as qs from "qs";

import { httpClient } from "../core/http";
import { LOGIN_REQUIRED, LOGIN_REQUEST } from "../core/security/auth-action-types";
import { loginSuccess, loginError, authRequest } from "../core/security/auth-action-creators";
import { openLoginDialog } from "./login-dialog";
import {LoginRequest} from "../core/security/auth-model";
import { setAuthenticationToken } from "../core/security/auth-config";
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

    // we open the login dialog
    yield put(openLoginDialog());
    
    let success : boolean = false;
    
    // we loop on login requests while the login is not a success
    while(success == false) {
        
        const loginAction : Action<LoginRequest> = yield take(LOGIN_REQUEST);
        const loginRequest : LoginRequest = loginAction.payload;
        
        try {
            let response : AxiosXHR<any> = yield doPerformLoginRequest(loginRequest.login, loginRequest.password);
            if(response.data.success === true) {
                setAuthenticationToken(response.data.authenticationToken);
                yield put(loginSuccess(response.data));
                yield put(authRequest());
                success = true;
            } else {
                yield put(loginError(response.data.errorMessage));
            }
        } catch(e) {
            //console.log("user login -> error : ", e);
            yield put(loginError("Une erreur est survenue"))
        }    
    }
}

function doPerformLoginRequest(username : string, password : string) {
    return httpClient.post("/rest/authentication/login", qs.stringify({ email: username, password : password }), {
        headers : { "Content-Type" : "application/x-www-form-urlencoded" } // required for tael login.
    })
}