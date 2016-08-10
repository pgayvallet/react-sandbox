import * as React from "react";

import { openModal } from "./modal-action-creators";
import registry from "./modal-registry";
import {ModalDialogContext} from "./modal-portal";

export const CONFIRM_DIALOG = "CONFIRM_DIALOG";

export interface ConfirmDialogOptions {

    text? : string;
    title? : string;

    confirmAction? : any;
    cancelAction?  : any;

}

class ConfirmDialog extends React.Component<ConfirmDialogOptions, any> {

    context : ModalDialogContext;

    static contextTypes = {
        dispatch        : React.PropTypes.func,
        closeDialog     : React.PropTypes.func,
        dismissDialog   : React.PropTypes.func,
    };

    render() {
        return (
            <div className="confirm-dialog">
                <div className="dialog-title">
                    {this.props.title || "default title"}
                </div>
                <div className="dialog-body">
                    {this.props.text || "default text"}
                </div>

                <button onClick={this.closeDialog.bind(this)}>Confirmer</button>
                <button onClick={this.dismissDialog.bind(this)}>Annuler</button>
            </div>
        );
    }

    closeDialog() {
        this.context.closeDialog();
        if(this.props.confirmAction != null) {
            this.context.dispatch(this.props.confirmAction);
        }

    }

    dismissDialog() {
        this.context.dismissDialog();
        if(this.props.cancelAction != null) {
            this.context.dispatch(this.props.cancelAction);
        }
    }

}

registry.registerModalType(CONFIRM_DIALOG, ConfirmDialog);

/**
 * Confirmation dialog action creator
 *
 * @param modalProperties
 * @returns {OpenModalAction}
 */
export const openConfirmDialog = (modalProperties : ConfirmDialogOptions = {}) => {
    return openModal(CONFIRM_DIALOG, modalProperties, {});
};

