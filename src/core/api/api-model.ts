
import { HttpMethod } from "../http/HttpMethod";

/**
 *  Represent an api call request
 */
export class ApiCallRequest {

    dataId : string;
    
    /**
     * The url to perform the api call to
     */
    url : string;

    /**
     * The http method to use to perform the api call
     */
    method : string = HttpMethod.GET;

    /**
     * The data to send with the request, either as query param for GET or payload for POST
     */
    data : Object = {};

    /**
     * List of extra headers to send with the request
     */
    extraHeaders : { [s:string] : string; } = {};


    /**
     * Optional error action to dispatch when the request returns in error.
     * This is used to manually handles the api error.
     */
    errorAction : string = null;

    /**
     * Optional success action to dispatch when the request returns in success.
     * This is used to manually handles the api success.
     */
    successAction : string = null;

}

/**
 * Represents an api call error
 */
export interface ApiCallError {
    
    request : ApiCallRequest;

    status : number;

    data : Object;

}

/**
 * Represents an api call response
 */
export interface ApiCallResponse {
    
    request : ApiCallRequest;

    data : Object;
    
}