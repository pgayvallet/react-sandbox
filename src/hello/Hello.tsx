import * as React from "react";
import helloService from "./HelloService";

import Modal from "../sandbox/modal/modal";

export interface HelloProps {
    compiler: string;
    framework: string;
}

export interface HelloState {

}

export class Hello extends React.Component<HelloProps, HelloState> {
    render() {
        return (
            <div className="hello">
                <h1>
                    Hello from {this.props.compiler} and {this.props.framework}!
                </h1>
                <div className="content">
                    <button onClick={this.openAlert}>Click me !</button>
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

        })

    }


    toto() : React.ReactElement<any> {
        return <div></div>;
    }

}