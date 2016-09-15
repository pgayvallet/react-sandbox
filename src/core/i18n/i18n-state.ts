
import {Locale} from "./i18n-model";

export interface I18nState {
    
    currentLocale : string

    bundles : {
        [key : string] : I18nBundle
    }
    
}

export interface I18nBundle {
    [key : string] : string
}