
import * as React from "react";
import { Route, IndexRoute } from 'react-router';

import { ApplicationLayout } from "./layout/application-layout";
import { buildInventaireRoute } from "./sections/inventaire";
import Home from "./sections/home/Home";
import PlainRoute = ReactRouter.PlainRoute;
import Store = Redux.Store;

export function configureRoutes(store : Store<any>) : PlainRoute[] {
    return [{
        path : "/",
        component : ApplicationLayout,

        indexRoute : {
            component : Home
        },

        childRoutes : [
            buildInventaireRoute(store)
        ]
    }];
}