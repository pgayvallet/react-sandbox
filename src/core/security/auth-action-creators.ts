

import * as ActionTypes from "./auth-action-types";
import { Action } from "../actions/Action";
import { LoginRequest, LoginSuccess, LoginError } from "./auth-model";


export function loginRequired() : Action<{}> {
    return {
        type    : ActionTypes.LOGIN_REQUIRED,
        payload : {}
    }
}

export function loginRequest(login: string, password : string) : Action<LoginRequest> {
    // TODO : md5 of the password here during action creation
    return {
        type    : ActionTypes.LOGIN_REQUEST,
        payload : {
            login    : login,
            password : password
        }
    }
}

export function loginError(response : any) : Action<LoginError> {
    return {
        type    : ActionTypes.LOGIN_ERROR,
        payload : {
            errorMessage : response.errorMessage
        }
    }
}

export function loginSuccess(response : any) : Action<LoginSuccess> {
    return {
        type    : ActionTypes.LOGIN_SUCCESS,
        payload : {
            authenticationToken : response.authenticationToken
        }
    }
}