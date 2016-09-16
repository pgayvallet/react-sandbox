
import {Locale, I18nBundle} from "./i18n-model";

export interface I18nState {
    
    currentLocale : string

    bundles : {
        [key : string] : I18nBundle
    }
    
}

