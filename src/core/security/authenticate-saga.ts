import { call, take, put, fork, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import * as Cookie from "js-cookie";

import { httpClient } from "../http";
import * as ActionTypes from "./auth-action-types";
import { loginRequired } from "./auth-action-creators";
import { getAuthenticationCookieName, setAuthenticationToken } from "./auth-config";

export function* authSaga() : any {
    
    function* authenticateScheduler() : any {
        // initial authentication
        yield delay(50);
        yield fork(performAuthentication);
        
        while(true) {
            yield take(ActionTypes.AUTH_REQUEST);
            yield fork(performAuthentication);
        }
    }
    
    function* performAuthentication() : any {
        let token = Cookie.get(getAuthenticationCookieName());
        if(token == null || token === "") {
            token = yield select(state => state.auth.authenticationToken);
        }

        console.log("*** performAuthentication. token = ", token);
        
        // token is null -> we ask the user to perform authentication now.
        if(token == null) {
            yield put(loginRequired())
        } else {
            setAuthenticationToken(token);
            let authResponse = yield doPerformAuthRequest(token);

            // TODO : try / catch + gestion.
            console.log("auth Response = ", authResponse);
            
        }

    }
    
    yield [
        call(authenticateScheduler)
    ];
}


function doPerformAuthRequest(authenticationToken : string) {
    return httpClient.get("/rest/authentication/current", {
        headers : {
            authenticationToken : authenticationToken
        }
    })
}


