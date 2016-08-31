

import {AuthState} from "./auth-state";

export function getAuthState(state) : AuthState {
    return state.auth;
}

/**
 * Returns true if the user is currently authenticated, false otherwise.
 * 
 * @param state
 * @return {boolean}
 */
export function isAuthenticated(state : Object) {
    return getAuthState(state).authenticated;
}