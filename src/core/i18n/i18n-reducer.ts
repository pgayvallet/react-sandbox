
import {I18nState} from "./i18n-state";
import {Action} from "../actions/Action";
import * as ActionTypes from "./i18n-action-types";
import {SetLocalePayload} from "./i18n-model";
import {toLocaleString} from "./i18n-utils";

let initialState : I18nState = {
    
    currentLocale : 'fr_FR',
    
    bundles : {}
    
};


export const i18nReducer = (state : I18nState = initialState, action : Action<any>) : I18nState => {
    switch(action.type) {
        case ActionTypes.SET_LOCALE : {
            return handleSetLocale(state, action.payload);
        }
        default:
            return state;
    }
};


function handleSetLocale(state : I18nState, setLocale : SetLocalePayload) : I18nState {
    return Object.assign({}, state, {
        currentLocale : toLocaleString(setLocale.locale)
    });
}