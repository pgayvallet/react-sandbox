import * as React from "react";
import {shallowEqual} from "./shallowEqual";

export function shallowCompare<P, S>(instance : React.Component<P, S>, nextProps : P, nextState : S) : boolean {
    return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
}