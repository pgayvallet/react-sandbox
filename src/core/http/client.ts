
import * as axios from "axios";

axios.defaults.headers.post['Content-Type'] = 'application/json';

export let httpClient = axios.create({


    transformRequest : [
        (data : Object) => {
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


// interceptor example
axios.interceptors.request.use((config) => {
    return config;
});