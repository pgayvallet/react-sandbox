import * as React from "react";

import { Topbar } from "./topbar/topbar";
import ModalPortal from "../ui/modal/modal-portal";
import { ToastrDeck } from "../ui/toastr/toastr-deck";

import { InitializerOverlay } from "./loading-screen/initializer-overlay";

export class ApplicationLayout extends React.Component<any, any> {


    // TODO : refactor the login mecanism to get ModalPortal back into the InitializeOverlay.

    render() {
        return (
            <div>
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
                <ModalPortal/>
            </div>
        );
    }
}