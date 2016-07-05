import * as React from "react";
import * as Promise from "bluebird";

export default class DialogRef<T> {

    dialogElement : React.ReactElement<T>;

    promise : Promise<any>;
    
}