
import {AuthState} from "./auth-state";
import * as ActionTypes from "./auth-action-types";
import {Action} from "../actions/Action";
import {LoginSuccess, LoginError} from "./auth-model";

let initialState : AuthState = {
    
    authenticated   : false,
    authenticating  : false,
    errorCount      : 0

};

export const authReducer = (state : AuthState = initialState, action : Action<any>) : AuthState => {
    switch(action.type) {

        // TODO : all action types
        case ActionTypes.LOGIN_SUCCESS:
            return handleLoginSuccess(state, action.payload);
        case ActionTypes.LOGIN_ERROR:
            return handleLoginError(state, action.payload);

        case ActionTypes.AUTH_SUCCESS:
            return handleAuthSuccess(state, action.payload);
        default:
            return state;
    }
};


function handleLoginSuccess(state : AuthState, loginSuccess : LoginSuccess) : AuthState {
    return Object.assign({}, state, {
        authenticationToken : loginSuccess.authenticationToken,
        errorMessage        : null,
        errorCount          : 0
    });
}

function handleLoginError(state : AuthState, loginError : LoginError) : AuthState {
    return Object.assign({}, state, {
        errorMessage : loginError.errorMessage,
        errorCount   : state.errorCount + 1
    });
}

function handleAuthSuccess(state : AuthState, authSuccess : Object) : AuthState {
    return Object.assign({}, state, {
        authenticated   : true,
        authenticating  : false
    });
}
