
import {Locale, I18nBundle} from "./i18n-model";
import {I18nState} from "./i18n-state";
import {toLocaleString, fromLocaleString} from "./i18n-utils";

export function getI18nState(state : any) : I18nState {
    return state.i18n;
}

export function getBundle(state : any, locale : Locale) : I18nBundle {
    return getI18nState(state).bundles[toLocaleString(locale)];
}

export function isBundleLoaded(state : any, locale : Locale) : boolean {
    return getBundle(state, locale) != null;
}

export function getMessage(state : any, key : string, locale : Locale) : string {
    let  bundle = getBundle(state, locale);
    return bundle != null ? bundle[key] : null;
}

export function getCurrentLocale(state : any) : Locale {
    return fromLocaleString(getI18nState(state).currentLocale);
}