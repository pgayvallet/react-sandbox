

import * as React from "react";
import {PageSection} from "../../../core/routing/PageSection";
import {RoutedComponentProps, RoutedComponent} from "../../../core/routing/RoutedComponent";
import {PageInventairePaiementsDetails} from "./details/inv-paiements-details";
import {PageInventairePaiementsRecapitulatif} from "./recapitulatif/inv-paiements-recapitulatif";
import { Tabset } from "../../../ui/tabset/Tabset";

export class PageInventairePaiements extends RoutedComponent<RoutedComponentProps, any> {

    context : any;

    static contextTypes : React.ValidationMap<any> = {
        store : React.PropTypes.object.isRequired
    };

    render() {
        let subsections = getInventairePaiementSection().getChildSections(this.context.store.getState());
        return (
            <div className="tl-page">
                <Tabset tabClass="tabset-section"
                        tabs={subsections}
                        location={this.props.location}
                        path={this.props.route.path}>
                    {this.props.children}
                </Tabset>
            </div>
        );
    }
    
}

export function getInventairePaiementSection() : PageSection {
    return {
        fragment    : "paiements",
        labelKey    : "portefeuille.Paiements",
        icon        : "fa-money",
        component   : PageInventairePaiements,

        getChildSections : (state) => {
            return [
                {
                    fragment    : "recapitulatif",
                    labelKey    : "Récapitulatif",
                    icon        : "fa-folder-open",
                    component   : PageInventairePaiementsRecapitulatif
                },
                {
                    fragment    : "detail",
                    labelKey    : "Détail",
                    icon        : "fa-list-ul",
                    component   : PageInventairePaiementsDetails
                }
            ];
        }

    };

};