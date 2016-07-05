import * as React from "react";
import { ReactElement } from "react";
import * as ReactDOM from "react-dom";
import * as Promise from "bluebird";

import AlertDialogOptions from "./alert/alert-dialog-options";
import ConfirmDialogOptions from "./confirm/confirm-dialog-options";

import ModalBackdropOverlay from "./modal-backdrop-overlay";

class Modal {

    private portalElement : HTMLElement;
    private modalBackdrop : ReactElement<any>;

    private active : boolean = false;
    
    alert(options : AlertDialogOptions) : Promise<boolean> {

        if(this.modalBackdrop == null) {
            this.showOverlay();
        }

        this.active = !this.active;

        return Promise.resolve(true);
    }
    
    confirm(options : ConfirmDialogOptions) : Promise<boolean> {
        return null;
    }
    
    private showOverlay() : void {
        this.createPortal();
        ReactDOM.render(<ModalBackdropOverlay display={this.active}/>, this.portalElement);
    }
    
    private hideOverlay() : void {
        
    }

    private createPortal() : void {
        if(this.portalElement != null) {
            return;
        }
        this.portalElement = document.createElement("div");
        this.portalElement.className = "modal-portal";
        document.body.appendChild(this.portalElement);
    }
    
}

var instance = new Modal();
export default instance;