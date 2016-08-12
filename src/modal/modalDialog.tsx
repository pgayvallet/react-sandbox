import * as React from "react";

export interface ModalDialogContext {

    dispatch    : (any) => void;
    closeDialog : () => any;
    dismissDialog : () => any;

}

export class ModalDialog<P, S> extends React.Component<P, S> {

    context : ModalDialogContext;

    static contextTypes = {
        dispatch        : React.PropTypes.func,
        closeDialog     : React.PropTypes.func,
        dismissDialog   : React.PropTypes.func,
    };

}
