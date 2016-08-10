import * as React from "react";
import { connect } from 'react-redux';


class ModalPortalProps {

    modals : any[]

}

class ModalPortal extends React.Component<ModalPortalProps, any> {

    render() {
        return (
            <div className="modal-portal">
                { this.props.modals.length > 0 ? 
                    <div className="modal-backdrop"></div> : null
                }
                <div className="modal-dialogs">
                    {this.props.modals.map((modal, index) => {
                        return <ModalPopin key={modal.uid} modal={modal} index={index}/>
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


class ModalPopin extends React.Component<any, any> {

    render() {
        return (
            <div className="modal-popin">
                Ceci est la modal {this.props.index}
            </div>
        );
    }

}