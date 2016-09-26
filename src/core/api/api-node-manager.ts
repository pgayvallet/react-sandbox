
import {isDataLoaded, getDataNode, getData, isDataLoading} from "./api-selectors";
import {apiCallRequest} from "./api-action-creators";

/**
 * Utility class to manage and observe a specific api node.
 */
export class ApiNodeManager {
    
    private nodeId      : string;
    private fetchUrl    : string;
    
    constructor(nodeId : string, fetchUrl : string) {
        this.nodeId = nodeId;
        this.fetchUrl = fetchUrl;
    }
    
    isLoaded(state) {
        return isDataLoaded(state, this.nodeId);
    }
    
    isLoading(state) {
        return isDataLoading(state, this.nodeId);
    }
    
    getData(state) {
        return getData(state, this.nodeId);
    }
    
    fetchData(dispatch) {
        dispatch(apiCallRequest(this.nodeId, this.fetchUrl));
    }
    
}