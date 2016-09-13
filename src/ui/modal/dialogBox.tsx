import * as React from "react";

/*
    Contains all the graphical components to represent a dialog box
 */


export class Dialog extends React.Component<any, {}> {

    render() {
        //noinspection TypeScriptUnresolvedVariable
        return (
            <div className={"dialog-box " + this.props.className}>
                {this.props.children}
            </div>
        );
    }

}

export class DialogHeader extends React.Component<{}, {}> {

    render() {
        return (
            <div className="dialog-box-header">
                {this.props.children}
            </div>
        );
    }

}

export class DialogBody extends React.Component<{}, {}> {

    render() {
        return (
            <div className="dialog-box-body">
                {this.props.children}
            </div>
        );
    }

}

export class DialogFooter extends React.Component<{}, {}> {

    render() {
        return (
            <div className="dialog-box-footer">
                {this.props.children}
            </div>
        );
    }

}


