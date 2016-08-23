
import * as axios from "axios";

export let httpClient = axios.create({


    transformRequest : [
        (data : Object) => {
            return data;
        }
    ],

    paramsSerializer : (params: Object) => {
        // TODO !
        console.log("paramSerializer ->", params);
        return params + "";
    }

});