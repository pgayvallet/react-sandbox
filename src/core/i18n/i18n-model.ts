

export interface Locale {
    country : string;
    language : string;
}

export interface I18nBundle {
    [key : string] : string
}

export interface BundleLoadSuccess {
    locale : Locale;
    bundles : I18nBundle
}