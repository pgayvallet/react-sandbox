import * as React from "react";

import { openModal } from "./modal-action-creators";
import registry from "./modal-registry";

export const CONFIRM_DIALOG = "CONFIRM_DIALOG";

class ConfirmDialog extends React.Component<any, any> {

    static contextTypes = {
        // store: React.PropTypes.object.isRequired,
        closeDialog     : React.PropTypes.func,
        dismissDialog   : React.PropTypes.func,
    };

    render() {
        console.log(this.context);
        return (
            <div className="confirm-dialog">
                This is a confirm dialog
                <button onClick={this.closeDialog.bind(this)}>Confirmer</button>
                <button onClick={this.dismissDialog.bind(this)}>Annuler</button>
            </div>
        );
    }

    closeDialog() {
        this.context.closeDialog();
    }

    dismissDialog() {
        this.context.dismissDialog();
    }

}

registry.registerModalType(CONFIRM_DIALOG, ConfirmDialog);

export const openConfirmDialog = (modalProperties = {}) => {
    return (dispatch) => {
        return openModal(CONFIRM_DIALOG, modalProperties, {})(dispatch);
    }
};

