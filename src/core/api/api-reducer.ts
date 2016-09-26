
import * as ActionTypes from "./api-action-types"
import {Action} from "../actions/Action";
import {ApiState, ApiDataNode, ApiDataNodeStatus} from "./api-state";
import {ApiCallRequest, ApiCallResponse} from "./api-model";


let initialState : ApiState = {

    performing : 0,

    data : {},

};

export const apiReducer = (state : ApiState = initialState, action : Action<any>) : ApiState => {
    switch(action.type) {
        case ActionTypes.API_CALL_REQUEST:
            return handleApiCallRequest(state, action.payload);
        case ActionTypes.API_CALL_PERFORM:
            // TODO
            return Object.assign({}, state, {
                performing : state.performing + 1
            });
        case ActionTypes.API_CALL_SUCCESS:
            return handleApiCallSuccess(state, action.payload);
        case ActionTypes.API_CALL_ERROR:
            // TODO
            return Object.assign({}, state, {
                performing : state.performing - 1
            });
        default:
            return state;
    }
};


const handleApiCallRequest = (state : ApiState, request : ApiCallRequest) : ApiState => {
    let stateData = Object.assign({}, state.data, {
        [request.dataId] : {
            key     : request.dataId,
            status  : ApiDataNodeStatus.REQUESTED,
        }
    });
    return Object.assign({}, state, {
        data : stateData
    });
};

const handleApiCallSuccess = (state : ApiState, response : ApiCallResponse) : ApiState => {
    const dataId = response.request.dataId;
    const node = Object.assign({}, state.data[dataId], {
        status  : ApiDataNodeStatus.FETCHED,
        data    : response.data
    });
    return Object.assign({}, state, {
        performing : state.performing - 1,
        data       : Object.assign({}, state.data, {[dataId] : node})
    });
};