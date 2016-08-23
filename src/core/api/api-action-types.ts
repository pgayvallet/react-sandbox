
import { getActionNameBuilder } from "../actions/actionPrefixer";

const API_ACTION_PREFIX = "API-CALL";
let addPrefix = getActionNameBuilder(API_ACTION_PREFIX);

export const API_CALL_REQUEST = addPrefix("API_CALL_REQUEST");

export const API_CALL_PERFORM = addPrefix("API_CALL_PERFORM");

export const API_CALL_SUCCESS = addPrefix("API_CALL_SUCCESS");

export const API_CALL_ERROR = addPrefix("API_CALL_ERROR");