
import {Locale} from "./i18n-model";

export function toLocaleString(locale : Locale) : string {
    return locale.language + "_" + locale.country;
}

export function fromLocaleString(localeString : string) : Locale {
    if(localeString == null) {
        return null;
    }
    let splits = localeString.split("_");
    return {
        language    : splits[0],
        country     : splits.length > 1 ? splits[1] : null
    };
}