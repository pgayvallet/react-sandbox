
import * as React from "react";
import { Route, IndexRoute } from 'react-router';

import { ApplicationLayout } from "./layout/application-layout";
import { inventaireRoute } from "./sections/inventaire";
import Home from "./home/Home";

export let routes = (
    <Route path="/" component={ApplicationLayout}>
        {inventaireRoute}
        <IndexRoute component={Home}/>
    </Route>
);