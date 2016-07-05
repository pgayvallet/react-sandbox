import * as React from "react";
import * as ReactDOM from "react-dom";
import DialogRef from "./dialog-ref";

import * as _ from "lodash";

export interface ModalDialogContainerProps {
    
    // The index of the dialog in the dialog stack
    dialogIndex : number;

    // The reference of the dialog
    dialogRef : DialogRef<any, any>;

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
        var self = this;
        return React.createElement(this.props.dialogRef.dialogClass, _.extend({}, this.props.dialogRef.dialogProps, {
            close : function(result : any) {
                self.props.dialogRef.resolve(result);
            },
            dismiss : function() {
                self.props.dialogRef.reject();
            }
        }));
        // not working :
        //return <this.props.dialogRef.dialogClass {...this.props.dialogRef.dialogProps}/>;
    }

}

