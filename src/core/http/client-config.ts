
import * as axios from "axios";
import AxiosXHRConfig = Axios.AxiosXHRConfig;
import InterceptorId = Axios.InterceptorId;

/*
 axios.defaults.baseURL = 'https://api.example.com';
 axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
 axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
 */

const httpHeaders = {};


export function setClientDefaultHeader(name : string, value : string) {
    httpHeaders[name] = value;
}

export function getDefaultHeaders() {
    return httpHeaders;
}