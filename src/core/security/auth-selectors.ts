

import {AuthState, User} from "./auth-state";

const ROLE_INTRA = "INTRA_TAELYS"; // TODO : var & move

export function getAuthState(state) : AuthState {
    return state.auth;
}

/**
 * Returns true if the user is currently authenticated, false otherwise.
 * 
 * @param state
 * @return {boolean}
 */
export function isAuthenticated(state : any) {
    return getAuthState(state).authenticated;
}

/**
 * Returns the currently logged user, or null if none.
 *
 * @param state
 * @return {User}
 */
export function getLoggerUser(state : any) : User {
    return getAuthState(state).user;
}

/**
 * Checks if the currently logged user has given role.
 * 
 * @param state
 * @param role
 * @return {boolean}
 */
export function userHasRole(state : any, role : string) : boolean {
    const user = getLoggerUser(state);
    return user != null && user.habilitations.indexOf(role) > -1;
}

/**
 * Returns true if the currently logged user is an intra user, false otherwise.
 *
 * @param state
 * @return {boolean}
 */
export function userIsIntra(state : any) : boolean {
    return userHasRole(state, ROLE_INTRA)
}

/**
 * Returns true if the currently logged user is a client (not an intra user), false otherwise.
 *
 * @param state
 * @return {boolean}
 */
export function userIsClient(state : any) : boolean {
    return !userIsIntra(state);
}