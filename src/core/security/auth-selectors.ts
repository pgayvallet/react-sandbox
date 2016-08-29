

import {AuthState} from "./auth-state";

/**
 * Returns true if the user is currently authenticated, false otherwise.
 * 
 * @param authState
 * @return {boolean}
 */
export function isAuthenticated(authState : AuthState) {
    return authState.authenticated;
}