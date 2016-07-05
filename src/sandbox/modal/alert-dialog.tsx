import * as React from "react";
import DialogProps from "./dialog-props";

export interface AlertDialogOptions {

    title : string;
    text : string;

}

export class AlertDialogProps extends DialogProps implements AlertDialogOptions {

    title : string;
    text : string;

}

export class AlertDialog extends React.Component<AlertDialogProps, {}> {
    
    render() {
        return (
            <div className="alert-dialog">
                <div className="dialog-title">
                    {this.props.title}
                </div>
                <div className="dialog-content">
                    {this.props.text}
                </div>
                <div className="dialog-footer">
                    <button className="btn btn-primary">Confirmer</button>
                </div>
            </div>
        );
    }
    
}