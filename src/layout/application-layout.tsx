import * as React from "react";

import { Topbar } from "./topbar/topbar";
import ModalPortal from "../ui/modal/modal-portal";
import { ToastrDeck } from "../ui/toastr/toastr-deck";

import { InitializerOverlay } from "./loading-screen/initializer-overlay";

export class ApplicationLayout extends React.Component<any, any> {

    render() {
        return (
            <InitializerOverlay>
                <div className="app-outside-wrapper">
                    <Topbar/>
                    <div className="app-inner-wrapper">
                        {this.props.children}
                    </div>
                    <ModalPortal/>
                    <ToastrDeck/>
                </div>
            </InitializerOverlay>
        );
    }
}