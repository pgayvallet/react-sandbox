
import { getActionNameBuilder } from "../actions/actionPrefixer";

const AUTH_ACTION_PREFIX = "AUTH";
let addPrefix = getActionNameBuilder(AUTH_ACTION_PREFIX);

export const AUTH_REQUEST = addPrefix("AUTH_REQUEST");

export const AUTH_SUCCESS = addPrefix("AUTH_SUCCESS");

export const AUTH_ERROR = addPrefix("AUTH_ERROR");

/**
 * Indicates that an action required an authentication to be performed. 
 * The action must be managed by the login implementation
 */
export const LOGIN_REQUIRED = addPrefix("LOGIN_REQUIRED");

/**
 * 
 */
export const LOGIN_REQUEST = addPrefix("LOGIN_REQUEST");

export const LOGIN_SUCCESS = addPrefix("LOGIN_SUCCESS");

export const LOGIN_ERROR = addPrefix("LOGIN_ERROR");