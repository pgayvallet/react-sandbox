import * as React from "react";
import { connect } from 'react-redux';
import modalRegistry from "./modal-registry";

class ModalPortalProps {

    modals : any[]

}

modalRegistry.registerModalType("lala", null);

class ModalPortal extends React.Component<ModalPortalProps, any> {

    render() {
        return (
            <div className="modal-portal">
                { this.props.modals.length > 0 ? 
                    <div className="modal-backdrop"></div> : null
                }
                <div className="modal-dialogs">
                    {this.props.modals.map((modal, index) => {
                        return <ModalDialogContainer key={modal.id} modal={modal} index={index}/>
                    })}
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    console.log("mapping state to ModalPortal props !", state);
    return {
        modals : state.modal.modals
    };
};

export default connect(mapStateToProps)(ModalPortal);




import { closeModal } from "./modal-action-creators";

class ModalDialogContainer extends React.Component<any, any> {

    static contextTypes = {
        store: React.PropTypes.object.isRequired
    };

    render() {
        return (
            <div className="modal-popin">
                (Ceci est la modal {this.props.index} - {this.props.modal.id})
                <br/>
                {this.getDialogContent()}
            </div>
        );
    }

    static childContextTypes = {
        closeDialog     : React.PropTypes.func,
        dismissDialog   : React.PropTypes.func,
    };

    getChildContext() {
        return {
            closeDialog: (value) => {
                console.log("closeDialog");
                this.context.store.dispatch(closeModal(this.props.modal.id))
            },
            dismissDialog: () => {
                console.log("dismissDialog");
            }
        };
    }

    getDialogContent() :  React.ReactElement<any> {
        let modalClass = modalRegistry.getModalType(this.props.modal.type);
        return React.createElement(modalClass, this.props.modal.props);
    }

}