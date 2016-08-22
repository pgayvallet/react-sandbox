import * as redux from "redux";

/**
 * Base interface for all the application's actions.
 */
export interface Action<T> extends redux.Action {
    
    type    : String,
    payload : T
    
}