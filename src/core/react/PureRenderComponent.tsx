import * as React from "react";
import { shallowCompare } from "../utils";


export class PureRenderComponent<P, T> extends React.Component<P, T> {
    
    shouldComponentUpdate(nextProps:P, nextState:T, nextContext:any):boolean {
        return shallowCompare(this, nextProps, nextState);
    }
    
}