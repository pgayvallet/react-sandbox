
import * as ActionTypes from "./api-action-types"
import {Action} from "../actions/Action";
import {ApiState, ApiDataNode, ApiDataNodeStatus} from "./api-state";
import {ApiCallRequest} from "./api-model";


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
            // TODO
            return Object.assign({}, state, {
                performing : state.performing - 1
            });
        case ActionTypes.API_CALL_ERROR:
            // TODO
            return Object.assign({}, state, {
                performing : state.performing - 1
            });
        default:
            return state;
    }
};


let handleApiCallRequest = (state : ApiState, request : ApiCallRequest) : ApiState => {
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