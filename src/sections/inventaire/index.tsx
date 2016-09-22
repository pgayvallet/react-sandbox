
import * as React from "react";
import { Route } from 'react-router';
import {connect} from "../../core/connect";
import PlainRoute = ReactRouter.PlainRoute;
import Store = Redux.Store;
import {userHasRole} from "../../core/security/auth-selectors";
import { Tabset } from "../../ui/tabset/Tabset";
import {RoutedComponent, RoutedComponentProps} from "../../core/routing/RoutedComponent";
import RouteComponent = ReactRouter.RouteComponent;
import RouteConfig = ReactRouter.RouteConfig;


/**
 * Represent a section in a tabset page.
 * Contains both pill information for the tabset panel
 * and routing informations for the routing.
 */
export interface SectionDescriptor {

    fragment    : string
    component   : RouteComponent

    icon?       : string
    label?      : string
    labelKey?   : string

    getChildSections? : (state : any, cb : (error: any, subsections: SectionDescriptor[]) => void) => void

}

function mapSectionToRoute(section : SectionDescriptor) : PlainRoute {
    return {
        path        : section.fragment,
        component   : section.component,
        getChildRoutes(partialNextState, callback) {
            // TODO
            callback(null, []);
        }

    }
}

function buildInventaireSections(state : any) : SectionDescriptor[] {

    let sections : SectionDescriptor[] = [];

    sections.push({
        fragment    : "portefeuilles",
        labelKey    : "portefeuille.Portefeuille",
        icon        : "fa-folder-open",
        component   : null
    });

    sections.push({
        fragment    : "echeances",
        labelKey    : "portefeuille.Echeances",
        icon        : "fa-list-ul",
        component   : null
    });


    return sections;
}


class InventaireSection extends RoutedComponent<RoutedComponentProps, any> {

    context : any;

    static contextTypes : React.ValidationMap<any> = {
        store : React.PropTypes.object.isRequired
    };

    
    render() {
        
        let sections = buildInventaireSections(this.context.store.getState());
        
        // TODO : RoutedComponent
        console.log("*** inventaireSection : render. props = ", this.context.store);
        return (
            <div>
                <Tabset tabs={sections}/>
            </div>
        );
    }
    
}

// export let inventaireRoute = <Route path="/inventaire" component={InventaireSection}/>;

export function buildInventaireRoute(store : Store<any>) : PlainRoute {
    return {
        path : "/inventaire",
        component : InventaireSection,

        getChildRoutes(partialNextState, callback) {
            console.log("*** inventaire : getChildRoutes ->", partialNextState, callback);
            callback(
                null,
                buildInventaireSections(store.getState()).map(mapSectionToRoute)
            );
        }

    };
}