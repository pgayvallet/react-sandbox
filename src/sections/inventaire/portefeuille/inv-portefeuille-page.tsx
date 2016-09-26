

import * as React from "react";
import {connect} from "../../../core/connect";
import { ApiNodeManager } from "../../../core/api";

import { InventairePortefeuilleTable } from "./inv-portefeuille-table";


const ptfDataManager = new ApiNodeManager("inventairePtf", '/rest/inventaire/portefeuille');


const mapStateToProps = (state, props) => {
    return {
        portefeuillesLoading : ptfDataManager.isLoading(state),
        portefeuillesLoaded  : ptfDataManager.isLoaded(state),
        portefeuilles        : ptfDataManager.getData(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPortefeuilles : () => {
            return ptfDataManager.fetchData(dispatch);
        }
    }
};

class PageInventairePortefeuilleImpl extends React.Component<any, any> {

    props : any;

    render() {
        return (
            <div className="tab-content">
                <h2>Page inventaire portefeuille</h2>
                <br/>
                (loaded : {this.props.portefeuillesLoaded + ""}, loading : {this.props.portefeuillesLoading + ""} )
                <br/>
                <InventairePortefeuilleTable portefeuilles={this.props.portefeuilles != null && this.props.portefeuilles.portefeuille}/>
            </div>
        );
    }

    componentDidMount():void {
        if(!this.props.portefeuillesLoaded && !this.props.portefeuillesLoading) {
            this.props.fetchPortefeuilles();
        }
    }
}

export const PageInventairePortefeuille = connect(mapStateToProps, mapDispatchToProps)(PageInventairePortefeuilleImpl);
