
import * as React from "react";
import { Route } from 'react-router';
import {connect} from "../../core/connect";



class InventaireSection extends React.Component<any, any> {

    render() {
        return (
            <div>Section inventaire</div>
        );
    }
    
}

export let inventaireRoute = <Route path="/inventaire" component={InventaireSection}/>;