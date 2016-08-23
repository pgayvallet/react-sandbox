import { call, take, put, fork } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { httpClient } from "../http/client";

import * as ActionTypes from "./api-action-types";
import {ApiCallRequest, ApiCallError, ApiCallResponse} from "./api-model";
import {Action} from "../actions/Action";
import * as Actions from "./api-action-creators";
import AxiosXHR = Axios.AxiosXHR;

export function* apiSaga() : any {

    /**
     * Global scheduler saga listening to every API_CALL_REQUEST and calling the api call saga for each of them.
     */
    function* apiScheduler() : any {
        while(true) {
            let action : Action<ApiCallRequest> = yield take(ActionTypes.API_CALL_REQUEST);
            yield apiCallSaga(action.payload);
        }
    }

    function* apiCallSaga(request : ApiCallRequest) : any {
        yield put(Actions.apiCallPerform(request));
        try {
            let response = yield doPerformApiCall(request);

            let apiResponse : ApiCallResponse = {
                request : request,
                data    : response.response.data
            };

            yield put(Actions.apiCallResponse(apiResponse));

            if(request.successAction != null) {
                yield put({
                    type    : request.successAction,
                    payload : apiResponse
                });
            }
        } catch(error) {
            let apiError : ApiCallError = {
                request : request,
                status  : error.response.status,
                data    : error.response.data
            };

            yield put(Actions.apiCallError(apiError));
            
            if(request.errorAction != null) {
                yield put({
                    type    : request.errorAction,
                    payload : apiError
                });
            }

        }
    }

    
    yield [
        call(apiScheduler)
    ];
}



function doPerformApiCall(request : ApiCallRequest) {
    return httpClient.get(request.url);
}