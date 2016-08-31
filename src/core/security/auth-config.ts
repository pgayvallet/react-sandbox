import * as Cookie from "js-cookie";

import { setClientDefaultHeader } from "../http/client-config";

let AUTHENTICATION_COOKIE = "__authenticationToken";

export function getAuthenticationCookieName() {
    return AUTHENTICATION_COOKIE;
}


/**
 * Sets the current authentication token, both in cookie and in http client headers.
 * This must be called after any successful authentication.
 */
export function setAuthenticationToken(authenticationToken : string) {
    Cookie.set(getAuthenticationCookieName(), authenticationToken);
    setClientDefaultHeader("authenticationToken", authenticationToken);
}