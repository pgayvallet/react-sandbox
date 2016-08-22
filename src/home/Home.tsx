import * as React from "react";
import { connect } from 'react-redux';

import { openConfirmDialog, openAlertDialog } from "../modal";
import { addWarning } from "../ui/toastr";

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
            </div>
        );
    }

    openPopin() {
        this.props.openTestPopin();
    }

    addToast() {
        this.props.addToast();
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
