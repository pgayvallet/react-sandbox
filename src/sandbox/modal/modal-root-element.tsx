import * as React from "react";
import DialogRef from "./dialog-ref";


export interface ModalRootProps {

    dialogStack : DialogRef<any>[];
    
}

export default class ModalRootElement extends React.Component<ModalRootProps, any> {
    
    render() {
        return (
            <div className="modal-root">
                <ModalBackdropOverlay display={this.props.dialogStack.length > 0}/>
                {
                    this.props.dialogStack.map(dialogRef => {
                        return dialogRef.dialogElement;    
                    })
                }
            </div>    
        );
    }
    
}