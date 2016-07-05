import * as React from "react";
import * as ReactDOM from "react-dom";
import DialogRef from "./dialog-ref";

export interface ModalDialogContainerProps {
    
    // The index of the dialog in the dialog stack
    dialogIndex : number;

    // The reference of the dialog
    dialogRef : DialogRef<any>;

}

export default class ModalDialogContainer extends React.Component<ModalDialogContainerProps, any> {

    private el : Element;

    render() {
        return (
            <div className="modal-dialog-container">
                {this.getDialogContent()}
            </div>
        )
    }

    componentDidMount() : void {
        this.el = ReactDOM.findDOMNode(this);
    }

    private getDialogContent() : React.ReactElement<any> {
        return this.props.dialogRef.dialogElement;
        //return React.cloneElement(this.props.dialogRef.dialogElement, { close : this.props.dialogRef.close});
    }

}

