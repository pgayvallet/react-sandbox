import * as React from "react";
import * as ReactCSSTransitionGroup from "react-addons-css-transition-group";

import { ModalDialogContainer } from "./modalDialogContainer";
import {connect} from "../../core/connect";

interface ModalPortalProps {

    modals : any[]

}

class ModalPortal extends React.Component<ModalPortalProps, any> {

    render() {
        let haveModals = this.props.modals.length > 0;
        return (
            <div className="modal-portal">
                <ReactCSSTransitionGroup component="div" className="backdrop-transition"
                                         transitionName="backdrop"
                                         transitionEnterTimeout={250} transitionLeaveTimeout={250}>
                    { haveModals ? <div className="modal-backdrop"></div> : null }
                </ReactCSSTransitionGroup>
                <ReactCSSTransitionGroup component="div" className="dialogs-transition"
                                         transitionName="modal"
                                         transitionEnterTimeout={250} transitionLeaveTimeout={250}>
                    {this.props.modals.map((modal, index) => {
                        return <ModalDialogContainer key={modal.id} modal={modal} index={index}/>
                    })}
                </ReactCSSTransitionGroup>
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



