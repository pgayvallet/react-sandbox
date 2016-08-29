
import {AuthState} from "./auth-state";
import * as ActionTypes from "./auth-action-types";
import {Action} from "../actions/Action";

let initialState : AuthState = {
    // TODO : state
    authenticated : false    

};

export const authReducer = (state : AuthState = initialState, action : Action<any>) : AuthState => {
    switch(action.type) {

        // TODO : all action types
        
        default:
            return state;
    }
};

