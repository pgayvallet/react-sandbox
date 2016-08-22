import * as _ from "lodash";

import { Toast } from "./toastr-model"
import * as ActionTypes from "./toastr-action-types"
import {Action} from "../../core/actions/Action";

export interface ToastState {

    toasts : Toast[]

}

let initialState : ToastState = {
    toasts : []
};

export const toastrReducer = (state : ToastState = initialState, action : Action<any>) : ToastState => {
    switch (action.type) {
        case ActionTypes.ADD_NOTIFICATION :
            return addNotification(state, action.payload);
        case ActionTypes.REMOVE_NOTIFICATION :
            return hideNotification(state, action.payload);
        default:
            return state;
    }
};

let addNotification = (state : ToastState, addedToast : Toast) : ToastState => {
    return _.extend({}, state, {
        toasts : [addedToast, ...state.toasts]
    }) as ToastState;
};

let hideNotification = (state : ToastState, payload) : ToastState => {
    let toast = _.find(state.toasts, { id : payload.id });
    if(toast != null) {
        return _.extend({}, state, {
            toasts : _.without(state.toasts, toast)
        }) as ToastState;
    } else {
        return state;
    }
};
