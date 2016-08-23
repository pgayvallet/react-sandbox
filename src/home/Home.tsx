import * as React from "react";
import { connect } from 'react-redux';

import { openConfirmDialog, openAlertDialog } from "../modal";
import { addWarning } from "../ui/toastr";

import { apiCallRequest } from "../core/api/api-action-creators";

let mapStateToProps = (state, props) => {
    return {};
};

let mapDispatchToProps = (dispatch) => {
    return {
        openTestPopin : () => {
            dispatch(openConfirmDialog({
                confirmAction : openAlertDialog({text : "confirmation's confirmation !"})
            }));
        },
        addToast : () => {
            dispatch(addWarning("hello dolly"))
        },
        testApi : () => {
            dispatch(apiCallRequest("/rest/hello"))
        }
    };
};

class Home extends React.Component<any, any> {

    props : any;

    render() {
        return (
            <div>
                Ceci est la home
                <br/>
                <button onClick={this.openPopin.bind(this)}>Ouvrir la popin</button>
                <br/><br/>
                <button onClick={this.addToast.bind(this)}>Ajouter un toast</button>
                <br/><br/>
                <button onClick={this.testApi.bind(this)}>Test API</button>
            </div>
        );
    }

    openPopin() {
        this.props.openTestPopin();
    }

    addToast() {
        this.props.addToast();
    }

    testApi() {
        this.props.testApi();
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
