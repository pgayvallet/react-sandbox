
import {I18nState} from "./i18n-state";
import Store = Redux.Store;

import { getMessage, getCurrentLocale } from "./i18n-selectors";

export class I18nManager {

    private store : Store<any>;

    constructor() {
        console.log("*** constructor")
    }

    public setStore(store : Store<any>) {
        this.store = store;
    }
    
    translate(key : string, ...props : string[]) : string {
        console.log("*** translate !")
        const state = this.store.getState();
        // TODO : interpolation using props.
        return getMessage(state, key, getCurrentLocale(state)) || ("???" + key + "???");
    }

}