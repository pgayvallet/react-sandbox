
import * as ActionTypes from "./api-action-types"
import {Action} from "../actions/Action";


export interface ApiState {

    performing : number

}


let initialState : ApiState = {

    performing : 0

};

export const apiReducer = (state : ApiState = initialState, action : Action<any>) : ApiState => {
    switch(action.type) {
        case ActionTypes.API_CALL_REQUEST:
            return state;
        case ActionTypes.API_CALL_PERFORM:
            return Object.assign({}, state, {
                performing : state.performing + 1
            });
        case ActionTypes.API_CALL_SUCCESS:
            return Object.assign({}, state, {
                performing : state.performing - 1
            });
        case ActionTypes.API_CALL_ERROR:
            return Object.assign({}, state, {
                performing : state.performing - 1
            });
        default:
            return state;
    }
};