

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

    getChildSections? : (state : any, cb : (error: any, subsections: PageSection[]) => void) => void

}


/**
 * Map a PageSection to it's associated Route.
 * 
 * @param section
 * @return {{path: string, component: RouteComponent, getChildRoutes: (function(any, any): undefined)}}
 */
export function mapSectionToRoute(section : PageSection) : PlainRoute {
    return {
        path        : section.fragment,
        component   : section.component,
        getChildRoutes(partialNextState, callback) {
            // TODO
            callback(null, []);
        }

    }
}