

import RouteComponent = ReactRouter.RouteComponent;
import PlainRoute = ReactRouter.PlainRoute;

/**
 * Represent a section in a tabset page (or a nested tabset)
 * Contains both pill information for the tabset panel
 * and routing informations for the routing.
 */
export interface PageSection {

    fragment    : string
    component   : RouteComponent

    icon?       : string
    label?      : string
    labelKey?   : string

    getChildSections? : (state : any) => PageSection[]

}


/**
 * Map a PageSection to it's associated Route.
 * 
 * @param section
 * @return {{path: string, component: RouteComponent, getChildRoutes: (function(any, any): undefined)}}
 */
export function mapSectionToRoute(section : PageSection, state : any) : PlainRoute {
    return {
        path        : section.fragment,
        component   : section.component,

        // TODO : alter index route to have only component, no path
        getIndexRoute(partialNextState, callback) {
            let childSections = section.getChildSections && section.getChildSections(state) || [];
            callback(null, childSections.length > 0 ? mapSectionToRoute(section.getChildSections(state)[0], state) : null)
            //let indexRoute = mapSectionToRoute(section.getChildSections(state)[0], state);
            //return indexRoute;
        },

        getChildRoutes(partialNextState, callback) {
            if(section.getChildSections == null) {
                callback(null, []);
            }
            callback(null, section.getChildSections(state).map(section => mapSectionToRoute(section, state)));
        }

    }
}