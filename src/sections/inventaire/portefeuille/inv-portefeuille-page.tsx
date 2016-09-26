

import * as React from "react";
import {connect} from "../../../core/connect";
import { ApiNodeManager } from "../../../core/api";

import { InventairePortefeuilleTable } from "./inv-portefeuille-table";


const ptfDataManager = new ApiNodeManager("inventairePtf", '/rest/inventaire/portefeuille');


const mapStateToProps = (state, props) => {
    return {
        portefeuillesLoaded : ptfDataManager.isLoaded(state),
        portefeuilles       : ptfDataManager.getData(state)
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
                <h2>Page inventaire portefeuille (loaded : {this.props.portefeuillesLoaded + ""} )</h2>
                <br/>
                <InventairePortefeuilleTable portefeuilles={this.props.portefeuilles != null && this.props.portefeuilles.portefeuille}/>
            </div>
        );
    }

    componentDidMount():void {
        if(!this.props.portefeuillesLoaded) {
            this.props.fetchPortefeuilles();
        }
    }
}

export const PageInventairePortefeuille = connect(mapStateToProps, mapDispatchToProps)(PageInventairePortefeuilleImpl);
