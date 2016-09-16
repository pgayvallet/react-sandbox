
import * as ActionTypes from "./i18n-action-types";
import {Locale, BundleLoadSuccess, I18nBundle} from "./i18n-model";
import {Action} from "../actions/Action";
import {fromLocaleString} from "./i18n-utils";

/**
 * Main action to be called to request the application locale to change.
 * 
 * @param locale The new locale to set
 * @return {Action<Locale>}
 */
export function setLocale(locale : Locale | string) : Action<Locale> {
    return {
        type    : ActionTypes.SET_LOCALE_REQUEST,
        payload : typeof locale === "string" ? fromLocaleString(locale) : locale
    }
}


/**
 * Internal action, called when bundles are loaded and manager did everything 
 * to prepare the locale change
 */
export function applySetLocale(locale : Locale) : Action<Locale> {
    return {
        type    : ActionTypes.SET_LOCALE_APPLY,
        payload : locale
    }
}

export function loadBundleRequest(locale : Locale) : Action<Locale> {
    return {
        type    : ActionTypes.LOAD_BUNDLE_REQUEST,
        payload : locale
    }
}

export function loadBundleSuccess(locale : Locale, bundles : I18nBundle) : Action<BundleLoadSuccess> {
    return {
        type    : ActionTypes.LOAD_BUNDLE_SUCCESS,
        payload : {
            locale  : locale,
            bundles : bundles
        }
    }
}