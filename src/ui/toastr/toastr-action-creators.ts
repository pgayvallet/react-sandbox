
import * as _ from "lodash";

import * as ActionTypes from "./toastr-action-types";
import { Action } from "../../core/actions/Action";
import {Toast, ToastType} from "./toastr-model";


interface ToastOptions {

    type : ToastType,
    
    message : string
    
    icon? : string,
    
    delay? : number,
}

function createToast(options : ToastOptions) : Toast {
    let toast = new Toast();
    toast.id =  _.uniqueId("toast-");
    toast.type = options.type;
    toast.message = options.message;
    toast.icon = options.icon;
    toast.delay = options.delay || 3000;
    return toast;
}

/**
 * Creates a warning-kind toast
 * 
 * @param message
 * @return {Action<Toast>}
 */
export const addWarning = (message : string) => {
    return addToast({
        type    : ToastType.WARNING,    
        message : message
    });
};



export const addToast = (options : ToastOptions) : Action<Toast> => {
    return {
        type    : ActionTypes.ADD_NOTIFICATION,
        payload : createToast(options)
    }
};

export const removeToast = (toastId : string) : Action<any> => {
    return {
        type    : ActionTypes.REMOVE_NOTIFICATION,
        payload : {
            id : toastId
        }
    }
};