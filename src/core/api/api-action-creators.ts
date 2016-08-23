
import * as _ from "lodash";

import * as ActionTypes from "./api-action-types";
import { Action } from "../actions/Action";
import {ApiCallRequest, ApiCallError, ApiCallResponse} from "./api-model";


export function apiCallRequest(dataId : string, url : string, data? : Object) : Action<ApiCallRequest> {
    let request = new ApiCallRequest();
    request.dataId = dataId;
    request.url = url;
    request.data = data;
    
    return {
        type    : ActionTypes.API_CALL_REQUEST,
        payload : request
    }
}


export function apiCallPerform(request : ApiCallRequest) : Action<ApiCallRequest>{
    return {
        type    : ActionTypes.API_CALL_PERFORM,
        payload : request
    }   
}

export function apiCallError(error : ApiCallError) : Action<ApiCallError>{
    return {
        type    : ActionTypes.API_CALL_ERROR,
        payload : error
    }
}

export function apiCallResponse(response : ApiCallResponse) : Action<ApiCallResponse>{
    return {
        type    : ActionTypes.API_CALL_SUCCESS,
        payload : response
    }
}