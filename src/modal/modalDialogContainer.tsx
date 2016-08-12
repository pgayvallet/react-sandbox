import * as React from "react";

import { getModalType } from "./modal-registry";
import { closeModal } from "./modal-action-creators";

export class ModalDialogContainer extends React.Component<any, any> {

    props : any;
    context : any;

    static contextTypes = {
        store: React.PropTypes.object
    };

    render() {
        return (
            <div className="modal-dialog-container">
                {this.getDialogContent()}
            </div>
        );
    }

    static childContextTypes = {
        dispatch        : React.PropTypes.func,
        closeDialog     : React.PropTypes.func,
        dismissDialog   : React.PropTypes.func,
    };

    getChildContext() {
        return {
            dispatch : this.context.store.dispatch,

            closeDialog: () => {
                this.context.store.dispatch(closeModal(this.props.modal.id));
            },

            dismissDialog: () => {
                this.context.store.dispatch(closeModal(this.props.modal.id));
            }
        };
    }

    getDialogContent() :  React.ReactElement<any> {
        let modalClass = getModalType(this.props.modal.type);
        return React.createElement(modalClass, this.props.modal.props);
    }

}