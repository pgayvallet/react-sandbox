

import * as ActionTypes from "./auth-action-types";
import { Action } from "../actions/Action";
import { LoginRequest, LoginSuccess, LoginError } from "./auth-model";

export function authRequest() : Action<{}> {
    return {
        type    : ActionTypes.AUTH_REQUEST,
        payload : {}
    }
}

export function loginRequired() : Action<{}> {
    return {
        type    : ActionTypes.LOGIN_REQUIRED,
        payload : {}
    }
}

export function loginRequest(login: string, password : string) : Action<LoginRequest> {
    return {
        type    : ActionTypes.LOGIN_REQUEST,
        payload : {
            login    : login,
            password : password
        }
    }
}

export function loginError(errorMessage : string) : Action<LoginError> {
    return {
        type    : ActionTypes.LOGIN_ERROR,
        payload : {
            errorMessage : errorMessage
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