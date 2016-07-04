import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./hello/Hello";

import * as Promise from "bluebird";

console.log("Promise = ", Promise);

ReactDOM.render(
    <Hello compiler="TypeScript 1.8" framework="React lol" />,
    document.getElementById("example")
);