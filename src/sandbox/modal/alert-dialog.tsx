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
                Ceci est mon dialogue d'alerte : <br/>
                {this.props.text}
            </div>
        );
    }
    
}