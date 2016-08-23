
import {ApiState, ApiDataNode} from "./api-state";

export let getDataNode = (state : ApiState, id : string) : ApiDataNode => {
    return state.data[id];
};

export let isDataLoaded = (state : ApiState, id : string) : boolean => {
    // TODO : this is not enough
    return getDataNode(state, id) != null;
};