import * as React from "react";
import * as Promise from "bluebird";
import DialogProps from "./dialog-props";

export default class DialogRef<T extends React.Component<D, any>, D extends DialogProps> {

    dialogClass   : {new() : T};
    
    dialogProps : D;

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