
import * as React from "react";
import { Route } from 'react-router';
import {connect} from "../../core/connect";
import PlainRoute = ReactRouter.PlainRoute;
import Store = Redux.Store;
import {userHasRole} from "../../core/security/auth-selectors";
import { Tabset } from "../../ui/tabset/Tabset";



class InventaireSection extends React.Component<any, any> {

    render() {
        // TODO : RoutedComponent
        console.log("*** inventaireSection : render. props = ", this.props)
        return (
            <div>
                <Tabset/>
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

            if(userHasRole(store.getState(), "LALA")) {

            }

            console.log("*** inventaire : getChildRoutes ->", partialNextState, callback);
            callback(null, []);
        }

    };
}


/*
 'use strict';

 module.config(function($routeProvider) {

 $routeProvider
 .when('/inventaire/:section?/:subsection?', {
 topbarKey  : "INVENTAIRE",
 controller : 'InventaireCtrl',
 template   : '<tl-tabset-page config="tabConfig"></tl-tabset-page>'
 });

 });

 module.controller('InventaireCtrl', function($scope, $authz) {

 $scope.tabConfig = {
 tabParameter : "section",
 tabs         : []
 };

 var tabs = $scope.tabConfig.tabs;
 tabs.push({
 label       : "portefeuille.Portefeuille",
 icon        : "fa-folder-open",
 fragment    : "portefeuilles",
 controller  : "InventairePortefeuilleController",
 templateUrl: __FOLDER_PATH__ + "/portefeuilles/inventairePortefeuilles.html"
 });

 tabs.push(
 {
 label       : "portefeuille.Echeances",
 icon        : "fa-list-ul",
 fragment    : "echeances",
 controller  : "InventaireEcheancesController",
 templateUrl : __FOLDER_PATH__ + "/echeances/inventaireEcheances.html",
 resolve     : {
 echeances : ["$http", function($http) {
 return $http.get('/rest/inventaire/echeances/periode').then(function(response) {
 return response.data;
 });
 }]
 }
 },
 {
 label: "portefeuille.Paiements",
 icon: "fa-money",
 fragment: "paiements",
 controller: "InventairePaiementsController",
 templateUrl: __FOLDER_PATH__ + "/paiement/inventairePaiement.html"
 },
 {
 label       : "portefeuille.Calendrier",
 icon        : "fa-calendar",
 fragment    : "calendrier",
 controller  : "CalendrierOptionsController",
 templateUrl : __FOLDER_PATH__ + "/calendrierOptions/calendrierOptions.html"
 },
 {
 label       : "portefeuille.Documents",
 icon        : "fa-file-text-o",
 fragment    : "documents",
 controller  : "DocumentsController",
 templateUrl : __FOLDER_PATH__ + "/documents/documents.html"
 }
 );

 });

 */