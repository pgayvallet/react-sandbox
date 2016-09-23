
import { createSelector } from "reselect";
import {userHasRole} from "../../core/security/auth-selectors";
import {PageSection} from "../../core/routing/PageSection";

import {PageInventairePortefeuille} from "./portefeuille/inv-portefeuille-page";
import {PageInventaireEcheances} from "./echeances/inv-echeances";
import {PageInventairePaiements} from "./paiements/inv-paiements";

export const getInventaireSections : (state) => PageSection[] = createSelector(
    // selectors
    (state) => userHasRole(state, "MY_ROLE"),
    // retrieving function
    (userHasMyRole) => {
        let sections : PageSection[] = [];

        sections.push({
            fragment    : "portefeuilles",
            labelKey    : "portefeuille.Portefeuille",
            icon        : "fa-folder-open",
            component   : PageInventairePortefeuille
        });

        sections.push({
            fragment    : "echeances",
            labelKey    : "portefeuille.Echeances",
            icon        : "fa-list-ul",
            component   : PageInventaireEcheances
        });

        sections.push({
            fragment    : "paiements",
            labelKey    : "portefeuille.Paiements",
            icon        : "fa-money",
            component   : PageInventairePaiements
        });


        return sections;
    }
);