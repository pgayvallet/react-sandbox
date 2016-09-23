import * as React from "react";
import PlainRoute = ReactRouter.PlainRoute;
import Store = Redux.Store;
import { Tabset } from "../../ui/tabset/Tabset";
import {RoutedComponent, RoutedComponentProps} from "../../core/routing/RoutedComponent";
import RouteComponent = ReactRouter.RouteComponent;
import RouteConfig = ReactRouter.RouteConfig;
import {mapSectionToRoute} from "../../core/routing/PageSection";
import {getInventaireSections} from "./inventaire-sections";


export function buildInventaireRoute(store : Store<any>) : PlainRoute {
    return {
        path : "/inventaire",
        component : InventairePage,

        getChildRoutes(partialNextState, callback) {
            // console.log("*** inventaire : getChildRoutes ->", partialNextState, callback);
            callback(
                null,
                getInventaireSections(store.getState()).map(mapSectionToRoute)
            );
        }
    };
}

class InventairePage extends RoutedComponent<RoutedComponentProps, any> {

    context : any;

    static contextTypes : React.ValidationMap<any> = {
        store : React.PropTypes.object.isRequired
    };


    render() {
        let sections = getInventaireSections(this.context.store.getState());
        return (
            <div className="tl-page">
                <Tabset tabs={sections}
                        location={this.props.location}
                        path={this.props.route.path}>
                    {this.props.children}
                </Tabset>
            </div>
        );
    }

}