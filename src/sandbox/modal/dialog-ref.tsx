import * as React from "react";
import * as Promise from "bluebird";

export default class DialogRef<T> {

    dialogElement : React.ReactElement<T>;

    resolve : Function;
    reject  : Function;
    promise : Promise<any>;

    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject  = reject;
        });
    }
    
}