
import * as axios from "axios";
import { getDefaultHeaders } from "./client-config";

axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use((config) => {
    config.headers = Object.assign({}, getDefaultHeaders(), config.headers);
    return config;
});

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

    paramsSerializer : (params: Object) => {
        // TODO !
        console.log("paramSerializer ->", params);
        return params + "";
    },

    responseType: 'json',

});

