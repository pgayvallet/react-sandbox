import * as React from "react";

import {openModal} from "./modal-action-creators";
import {registerModalType} from "./modal-registry";
import {ModalDialog} from "./modal-portal";

export const ALERT_DIALOG = "ALERT_DIALOG";

export interface AlertDialogOptions {

    text? : string;
    title? : string;

    confirmAction? : any;

}

class AlertDialog extends ModalDialog<AlertDialogOptions, any> {

    render() {
        return (
            <div className="confirm-dialog">
                <div className="dialog-title">
                    {this.props.title || "default title"}
                </div>
                <div className="dialog-body">
                    {this.props.text || "default text"}
                </div>

                <button onClick={this.closeDialog.bind(this)}>Ok</button>
            </div>
        );
    }

    closeDialog() {
        if(this.props.confirmAction != null) {
            this.context.dispatch(this.props.confirmAction);
        }
        this.context.closeDialog();
    }
    
}

registerModalType(ALERT_DIALOG, AlertDialog);

/**
 * Confirmation dialog action creator
 *
 * @param modalProperties
 * @returns {OpenModalAction}
 */
export const openAlertDialog = (modalProperties : ConfirmDialogOptions = {}) => {
    return openModal(ALERT_DIALOG, modalProperties, {});
};
