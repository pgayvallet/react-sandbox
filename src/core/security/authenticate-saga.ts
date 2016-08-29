import { call, take, put, fork } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import * as Cookie from "js-cookie";


import * as ActionTypes from "./auth-action-types";
import { loginRequired } from "./auth-action-creators";
import { getAuthenticationCookieName } from "./auth-config";

export function* authSaga() : any {
    
    function* authenticateScheduler() : any {
        // initial authentication
        yield delay(50);
        yield fork(performAuthentication);
        
        while(true) {
            let action = yield take(ActionTypes.AUTH_REQUEST);   
            yield fork(performAuthentication);
        }
    }
    
    function* performAuthentication() : any {
        let token = Cookie.get(getAuthenticationCookieName());
        
        // token is null -> we ask the user to perform authentication now.
        if(token == null) {
            yield put(loginRequired())
        } else {
            
        }
        
        // TODO
    }
    
    yield [
        call(authenticateScheduler)
    ];
}




