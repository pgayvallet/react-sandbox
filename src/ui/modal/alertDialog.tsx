import * as React from "react";

import {openModal} from "./modal-action-creators";
import {registerModalType} from "./modal-registry";
import {ModalDialog} from "./modalDialog";
import {Dialog, DialogBody, DialogFooter, DialogHeader} from "./dialogBox";

export const ALERT_DIALOG = "ALERT_DIALOG";

export interface AlertDialogOptions {

    text? : string;
    title? : string;

    confirmAction? : any;

}

class AlertDialog extends ModalDialog<AlertDialogOptions, any> {

    render() {
        return (
            <Dialog>
                <DialogHeader>
                    <h3>{this.props.title || "default title"}</h3>
                </DialogHeader>
                <DialogBody>
                    {this.props.text || "default text"}
                </DialogBody>
                <DialogFooter>
                    <button onClick={this.closeDialog.bind(this)}>Ok</button>    
                </DialogFooter>
            </Dialog>
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
export const openAlertDialog = (modalProperties : AlertDialogOptions = {}) => {
    return openModal(ALERT_DIALOG, modalProperties, {});
};