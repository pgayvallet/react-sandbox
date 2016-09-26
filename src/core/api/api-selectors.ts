
import {ApiState, ApiDataNode, ApiDataNodeStatus} from "./api-state";

/**
 * Returns the API state
 *
 * @param state
 * @return {any}
 */
export function getApiState(state : any) : ApiState {
    return state.api;
}


export let getDataNode = (state : any, id : string) : ApiDataNode => {
    return getApiState(state).data[id];
};


export let isDataLoaded = (state : any, id : string) : boolean => {
    const dataNode = getDataNode(state, id);
    return dataNode != null ? dataNode.status === ApiDataNodeStatus.FETCHED : false;
};

export function isDataLoading(state : any, id : string) : boolean {
    const dataNode = getDataNode(state, id);
    if(dataNode == null) {
        return false;
    }
    return dataNode.status === ApiDataNodeStatus.REQUESTED || dataNode.status === ApiDataNodeStatus.FETCHING;
}

export function getData(state : any, id : string) : any {
    let node = getDataNode(state, id);
    return node != null ? node.data : null;
}