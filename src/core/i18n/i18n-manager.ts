
import Store = Redux.Store;

import { getMessage, getCurrentLocale } from "./i18n-selectors";

export class I18nManager {

    private store : Store<any>;
    
    public setStore(store : Store<any>) {
        this.store = store;
    }
    
    translate(key : string, ...props : string[]) : string {
        // console.log("*** translate !")
        const state = this.store.getState();
        // TODO : interpolation using props.
        return getMessage(state, key, getCurrentLocale(state)) || ("???" + key + "???");
    }

}


/*
 var SUPPLANT_REGEXP = /{{([^{}]*)}}/g;
 function supplant(template, values) {
 return template.replace(SUPPLANT_REGEXP, function (a, b) {
 var r = values[b];
 return r != null ? r : a;
 });
 }
 */