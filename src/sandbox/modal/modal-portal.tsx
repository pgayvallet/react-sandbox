import * as React from "react";
import DialogRef from "./dialog-ref";

import ModalBackdropOverlay from "./modal-backdrop-overlay";
import ModalDialogContainer from "./modal-dialog-container";

export interface ModalPortalProps {

    dialogStack : DialogRef<any>[];
    
}

export default class ModalPortal extends React.Component<ModalPortalProps, any> {
    
    render() {
        return (
            <div className="modal-portal">
                <ModalBackdropOverlay key="backdrop" ref="backdrop" display={this.props.dialogStack.length > 0}></ModalBackdropOverlay>
                {
                    this.props.dialogStack.map( (dialogRef, i) => {
                        return <ModalDialogContainer key={'dialog-' + i} dialogIndex={i} dialogRef={dialogRef}/>;
                    })
                }
            </div>    
        );
    }
    
}