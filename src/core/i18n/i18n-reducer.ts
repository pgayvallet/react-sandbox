
import {I18nState} from "./i18n-state";
import {Action} from "../actions/Action";
import * as ActionTypes from "./i18n-action-types";
import {Locale, BundleLoadSuccess} from "./i18n-model";
import {toLocaleString} from "./i18n-utils";

let initialState : I18nState = {
    
    currentLocale : null,
    
    bundles : {}
    
};


export const i18nReducer = (state : I18nState = initialState, action : Action<any>) : I18nState => {
    switch(action.type) {
        case ActionTypes.SET_LOCALE_APPLY : {
            return handleApplyLocale(state, action.payload);
        }
        case ActionTypes.LOAD_BUNDLE_SUCCESS : {
            return handleLoadBundleSuccess(state, action.payload);
        }
        default:
            return state;
    }
};


function handleApplyLocale(state : I18nState, locale : Locale) : I18nState {
    return Object.assign({}, state, {
        currentLocale : toLocaleString(locale)
    });
}

function handleLoadBundleSuccess(state : I18nState, bundleLoad : BundleLoadSuccess) : I18nState {
    var bundles = Object.assign({}, state.bundles, { [toLocaleString(bundleLoad.locale)] : bundleLoad.bundles });
    return Object.assign({}, state, {
        bundles : bundles
    });
}