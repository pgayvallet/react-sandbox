import * as React from "react";
import { connect } from 'react-redux';
import { getModalType } from "./modal-registry";

interface ModalPortalProps {

    modals : any[]

}

class ModalPortal extends React.Component<ModalPortalProps, any> {

    render() {
        return (
            <div className="modal-portal">
                { this.props.modals.length > 0 ? 
                    <div className="modal-backdrop"></div> : null
                }

                    {this.props.modals.map((modal, index) => {
                        return <ModalDialogContainer key={modal.id} modal={modal} index={index}/>
                    })}
                
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        modals : state.modal.modals
    };
};

export default connect(mapStateToProps)(ModalPortal);




import { closeModal } from "./modal-action-creators";

export interface ModalDialogContext {

    dispatch    : (any) => void;
    closeDialog : () => any;
    dismissDialog : () => any;

}


export class ModalDialog<P, S> extends React.Component<P, S> {

    context : ModalDialogContext;

    static contextTypes = {
        dispatch        : React.PropTypes.func,
        closeDialog     : React.PropTypes.func,
        dismissDialog   : React.PropTypes.func,
    };

}

class ModalDialogContainer extends React.Component<any, any> {

    props : any;
    context : any;

    static contextTypes = {
        store: React.PropTypes.object
    };

    render() {
        return (
            <div className="modal-dialog-container">
                <div className="modal-dialog-content">
                    (Ceci est la modal {this.props.index} - {this.props.modal.id})
                    <br/>
                    {this.getDialogContent()}
                </div>
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