import * as React from "react";

import { Topbar } from "./topbar/topbar";
import ModalPortal from "../ui/modal/modal-portal";
import { ToastrDeck } from "../ui/toastr/toastr-deck";

import Home from "../home/Home";

export class ApplicationLayout extends React.Component<any, any> {

    render() {
        return (
            <div className="app-outside-wrapper">
                <Topbar/>
                <div className="app-inner-wrapper">
                    {this.props.children != null ? this.props.children : <Home/>}
                </div>
                <ModalPortal/>
                <ToastrDeck/>
            </div>
        );
    }
}