
import * as axios from "axios";
import AxiosXHRConfig = Axios.AxiosXHRConfig;
import InterceptorId = Axios.InterceptorId;

/*
 axios.defaults.baseURL = 'https://api.example.com';
 axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
 axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
 */

const httpHeaders = {};

/**
 * Adds an interceptor 
 *
 * @param interceptor
 * @return {InterceptorId}
 */
export let addInterceptor = <U>(interceptor : (config: AxiosXHRConfig<U>) => AxiosXHRConfig<U> ) : InterceptorId => {
    return axios.interceptors.request.use(interceptor);
};

export function setClientDefaultHeader(name : string, value : string) {
    httpHeaders[name] = value;
}

export function getDefaultHeaders() {
    return httpHeaders;
}