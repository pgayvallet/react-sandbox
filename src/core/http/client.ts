
import * as axios from "axios";
import { getDefaultHeaders } from "./client-config";
import { toQueryString } from "../utils/qsUtils";

axios.defaults.headers.post['Content-Type'] = 'application/json';



export let httpClient = axios.create({

    transformRequest : [
        (data : Object) => {
            if(typeof data === "string") {
                return data;
            }
            // TODO : serialize dates.
            return JSON.stringify(data);
        }
    ],

    timeout : 60 * 1000,

    paramsSerializer : (params: Object) => {
        // TODO : serialize dates.
        return toQueryString(params);
    },

    responseType: 'json',

});

httpClient.interceptors.request.use((config) => {
    config.headers = Object.assign({}, getDefaultHeaders(), config.headers);
    return config;
});
