import * as React from "react";
import { Link } from "react-router";

import { InfiniTable, TableConfiguration } from "../../../ui/infinitable";
import {t} from "../../../core/i18n";
import {PureRenderComponent} from "../../../core/react/PureRenderComponent";


interface InventairePortefeuilleTableProps {
    portefeuilles : any[]
}

export class InventairePortefeuilleTable extends PureRenderComponent<InventairePortefeuilleTableProps, any> {

    state : { tableConfig : TableConfiguration } = {
        tableConfig : null
    };

    render() {
        return (
            <div>
                <InfiniTable config={this.state.tableConfig} data={this.props.portefeuilles}/>
            </div>
        )
    }
    
    componentDidMount():void {
        this.buildTableConfig();
    }

    buildTableConfig()  {
        let tableConfig = {
            id : "inventairePortefeuillefTable",

            initialSort: ["crd", "desc"],

            columns : [
                {
                    id          : "reference",
                    attribute   : "reference",
                    title       : t('portefeuille.Reference'),
                    sortable    : true,
                    
                    render : (model) => {
                        return (
                            <Link to={"/fiche/" + model.id}>
                                {model.reference}
                            </Link>
                        );
                    }
                },
                {
                    id          : "crd",
                    attribute   : 'crd',
                    title       : t('portefeuille.Crd'),
                    cellClass   : 'align-r',

                    render : (model) => {
                        return (
                            <span>{JSON.stringify(model.crd)}</span>

                        );
                    }
                }
            ]
        };
        this.setState({
            tableConfig : tableConfig
        });
    }

}

/*
 $scope.produitsTableOptions = {
 id: "inventPtfTable",
 source: "portefeuilles",

 initialSort: ["crd", "desc"],

 columnGroups: [
 {
 id: "echeance",
 title: "Prochain flux",
 columns: ["dateProchaineEcheance", "fluxProchaineEcheance"],
 visible: true
 },
 {
 id: "ra",
 title: "Prochain RA",
 columns: ["dateProchainRA", "penaliteProchainRA"],
 visible: false
 }
 ],

 columns: [
 {
 id: "reference",
 attribute: 'reference',
 title: $translate('portefeuille.Reference'),
 template: '' +
 '<a ng-if="params.splitByBudget!=true" href="/tael/fiche/{{::model.id}}">' +
 '   {{::model.reference}} ' +
 '   <span class="sim-pill" ng-if="::model.type==\'SIMULATION\'">sim</span>' +
 '</a>' +
 '<span ng-if="params.splitByBudget==true">' +
 '   <a href="/tael/fiche/{{::model.id}}">{{::model.reference}}</a> ' +
 '   {{::model.referenceComplementBudget}} ' +
 '   <span class="sim-pill" ng-if="::model.type==\'SIMULATION\'">sim</span>' +
 '</span>' +
 '<div ng-if="::model.referenceContrepartie" class="ref-contrepartie" title="Référence contrepartie">' +
 '   {{::model.referenceContrepartie}}' +
 '</div>',
 sortable: true
 },
 {
 id: "emprunteur",
 attribute: 'emprunteur',
 title: $translate('portefeuille.Emprunteur'),
 sortable: true,
 condition: function() {
 return avecEmprunteur;
 }
 },
 {
 attribute: 'nature',
 title: $translate('portefeuille.Nature'),
 template: "<pill-nature-produit nature='{{::model.nature}}'></pill-nature-produit>",
 sortable: true,
 cellClass: 'align-c'
 },
 {
 attribute: 'vie',
 title: "",
 cellClass: 'align-c',
 width: "25px",
 template: '<div class="{{::model.vie}}-circle" tl-tooltip="{{\'vieProduit.\' + model.vie | translate}}"></div>'
 },
 {
 id: "crd",
 attribute: 'crd',
 title: $translate('portefeuille.Crd'),
 filter: "montant:0",
 template: "" +
 "<span class='nowrap' ng-if='model.crdRecu==null'>{{::model.crd|montant:0}}</span>" +
 "<span ng-if='::model.crdRecu'>" +
 "   <span class='nowrap jambe'><span class=\"circle-info\" tl-tooltip=\"Payé\">P</span>{{::model.crd|montant:0}}</span>" +
 "   <span class='nowrap jambe'><span class=\"circle-info\" tl-tooltip=\"Reçu\">R</span>{{::model.crdRecu|montant:0}}</span>" +
 "</span>",
 cellClass: 'align-r',
 sortable: true,
 sortType: "montant"
 },
 {
 attribute: 'dateFin',
 title: $translate('portefeuille.dateFin'),
 filter: "dateShort",
 sortable: true,
 sortType: "date"
 },
 {
 attribute: 'gissler',
 title: $translate('portefeuille.Gissler'),
 template: "<gissler gissler='model.gissler'></gissler>",
 cellClass: 'align-c'
 },
 {
 attribute: 'indexation',
 title: $translate('portefeuille.Indexation'),
 template: "" +
 "<div class='ptf-col-indexation'>" +
 "   <span ng-if='::model.indexations.length==0'>" +
 "       <span ng-if='::model.indexationRecu==null'>{{::model.indexation}}</span>" +
 "       <span ng-if='::model.indexationRecu'>" +
 "           <span class=\"jambe\">" +
 "               <span class=\"circle-info\" tl-tooltip=\"Payé\">P</span> " +
 "               {{::model.indexation}}" +
 "           </span> <span class=\"jambe\">" +
 "               <span class=\"circle-info\" tl-tooltip=\"Reçu\">R</span>" +
 "               {{::model.indexationRecu}}" +
 "           </span>" +
 "       </span>" +
 "   </span>" +
 "   <span ng-if='::model.indexations.length!=0'>" +
 "       <div ng-repeat='indexation in ::model.indexations'>" +
 "           {{::indexation}}" +
 "       </div>" +
 "   </span>" +
 "</div>"
 },
 {
 attribute: 'contrepartie.libelleCourtUsuel',
 title: $translate('portefeuille.Banque'),
 cellClass: "align-c",
 sortable: true,
 template: '<logo-contrepartie size="small" contrepartie="model.contrepartie"></logo-contrepartie>'
 },
 {
 attribute: 'budget',
 title: $translate('portefeuille.Budget'),
 template: '' +
 "<span class='budget' ng-repeat='budget in ::model.imputationBudgets' tl-tooltip=\"{{cheminBudget(budget)}}\">" +
 "   <span>{{::budget.nom}}</span>" +
 "   <span class='imputation nowrap'>{{::budget.imputation|percentage}}</span>" +
 "</span>"
 },
 // prochaine échéance
 {
 title: $translate('portefeuille.ProchainFlux'),
 group: true,

 columns: [
 {
 id: 'dateProchaineEcheance',
 attribute: 'dateProchaineEcheance',
 title: $translate('portefeuille.dateProchaineEcheance'),
 filter: "dateShort",
 cellClass: "align-c",
 width: "95px"
 },
 {
 id: 'fluxProchaineEcheance',
 attribute: 'fluxProchaineEcheance',
 title: $translate('portefeuille.fluxProchaineEcheance'),
 filter: "montant:0",
 cellClass: "align-r nowrap"
 }
 ]
 },
 // prochain R.A
 {
 title: $translate('portefeuille.ProchainRA'),
 group: true,

 columns: [
 {
 id: 'dateProchainRA',
 attribute: 'dateProchainRA',
 title: $translate('portefeuille.dateProchainRA'),
 filter: "dateShort",
 cellClass: 'align-c',
 width: "95px"
 },
 {
 id: 'penaliteProchainRA',
 attribute: 'penaliteProchainRA',
 title: $translate('portefeuille.penaliteProchainRA'),
 filter: "montant:0",
 cellClass: 'align-r nowrap'
 }
 ]
 },
 // actions
 {
 attribute: null,
 title: "",
 cellClass: "align-c",
 template: '' +
 '<div>' +
 '   <tl-icon-button ng-if="params.splitByBudget!=true" icon="copy" tl-tooltip="Dupliquer en simulation" ng-click="copySimulation(model)"></tl-icon-button>' +
 '</div>'
 },
 // commentaire intra
 {
 attribute: 'commentaireConsultant',
 title: "Com.",
 condition: function() {
 return $authz.hasRole('INTRA_TAELYS');
 }
 }
 ]
 };
 */