

import * as axios from "axios";

axios.create({


    transformRequest : [
        (data) => {
            return data;
        }
    ],

    paramsSerializer : (params: Object) => {
        // TODO !
        console.log("paramSerializer ->", params);
        return params + "";
    }

});


/*
function *g(): Iterable<string> {
    yield "";

}
*/