

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
    return {
        type    : ActionTypes.LOGIN_REQUEST,
        payload : {
            login    : login,
            password : password
        }
    }
}

export function loginError() : Action<LoginError> {
    return {
        type    : ActionTypes.LOGIN_ERROR,
        payload : {}
    }
}

export function loginSuccess() : Action<LoginSuccess> {
    return {
        type    : ActionTypes.LOGIN_SUCCESS,
        payload : {}
    }
}