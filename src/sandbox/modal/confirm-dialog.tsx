import * as React from "react";

export interface ConfirmDialogProps {

    title : string;
    text : string;

}

export class ConfirmDialog extends React.Component<ConfirmDialogProps, {}> {

    render() {
        return (
            <div className="confirm-dialog">
                Ceci est mon dialogue de confirmation
            </div>
        );
    }

}