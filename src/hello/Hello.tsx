import * as React from "react";
import helloService from "./HelloService";

import Modal from "../sandbox/modal/modal";
import DialogProps from "../sandbox/modal/dialog-props";

export interface HelloProps {
    compiler: string;
    framework: string;
}

export interface HelloState {

}


export class HelloDialogProps extends DialogProps {

    constructor(public text? : string) {
        super();
    }

}

export class HelloDialog extends React.Component<HelloDialogProps, any> {

    render() {
        return (
            <div>
                Hello dialog {this.props.text}
            </div>
        );
    }

}

export class Hello extends React.Component<HelloProps, HelloState> {
    render() {
        return (
            <div className="hello">
                <h1>
                    Hello from {this.props.compiler} and {this.props.framework}!
                </h1>
                <div className="content">
                    <button onClick={this.openAlert.bind(this)}>Click me !</button>
                </div>
            </div>
        );
    }

    componentDidMount() : void {
        helloService.doStuff();
    }


    openAlert() : void {
        console.log("openAlert !");
        Modal.alert({ title : "Mon alerte", text : "Attention petit "}).then(b => {
            console.log("alerte fermée !")
        });

        // Modal.open(HelloDialog, new HelloDialogProps("lala"));

        // Modal.open(<HelloDialog myProp={this.openAlert} />);

    }


    toto() : React.ReactElement<any> {
        return <div></div>;
    }

}