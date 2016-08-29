import * as React from "react";

import {openModal} from "./modal-action-creators";
import {registerModalType} from "./modal-registry";
import {ModalDialog} from "./modalDialog";
import {Dialog, DialogBody, DialogFooter, DialogHeader} from "./dialogBox"

export const CONFIRM_DIALOG = "CONFIRM_DIALOG";

export interface ConfirmDialogOptions {

    text? : string;
    title? : string;

    confirmAction? : any;
    cancelAction?  : any;

}

class ConfirmDialog extends ModalDialog<ConfirmDialogOptions, any> {

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
                    <button onClick={this.closeDialog.bind(this)}>Confirmer</button>
                    <button onClick={this.dismissDialog.bind(this)}>Annuler</button>
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

    dismissDialog() {
        if(this.props.cancelAction != null) {
            this.context.dispatch(this.props.cancelAction);
        }
        this.context.dismissDialog();
    }

}

registerModalType(CONFIRM_DIALOG, ConfirmDialog);

/**
 * Confirmation dialog action creator
 *
 * @param modalProperties
 * @returns {OpenModalAction}
 */
export const openConfirmDialog = (modalProperties : ConfirmDialogOptions = {}) => {
    return openModal(CONFIRM_DIALOG, modalProperties, {});
};

