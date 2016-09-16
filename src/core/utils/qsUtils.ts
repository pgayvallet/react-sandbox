
import * as _ from "lodash";


export function toQueryString(obj : Object) : string {
    return _.chain(obj)
        .map((value, key) => encodeURIComponent(key) + "=" + encodeURIComponent(value))
        .join("&")
        .value()
        .replace(/%20/g, "+");
}