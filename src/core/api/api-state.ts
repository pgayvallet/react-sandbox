
import {ApiCallRequest} from "./api-model";

export interface ApiState {

    performing : number;

    data : { [s:string] : ApiDataNode; }

}

export let ApiDataNodeStatus = {

    REQUESTED   : "REQUESTED",
    FETCHING    : "FETCHING",
    ERROR       : "ERROR",
    FETCHED     : "FETCHED"

};

export interface ApiDataNode {

    id          : string;

    status      : string;
    fetchDate?  : number;

    data?        : any;

}