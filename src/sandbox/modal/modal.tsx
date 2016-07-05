import * as React from "react";
import { ReactElement } from "react";
import * as ReactDOM from "react-dom";
import * as Promise from "bluebird";

import {AlertDialog, AlertDialogProps, AlertDialogOptions} from "./alert-dialog";
import { ConfirmDialog, ConfirmDialogProps } from "./confirm-dialog";

import ModalBackdropOverlay from "./modal-backdrop-overlay";
import DialogRef from "./dialog-ref";
import * as _ from "lodash";

class Modal {

    private portalElement : HTMLElement;
    private modalBackdrop : ReactElement<any>;

    private dialogStack : DialogRef<any>[] = [];

    private active : boolean = false;
    
    alert(options : AlertDialogOptions) : Promise<boolean> {
        let dialogProps = new AlertDialogProps();
        _.extend(dialogProps, options);
        return this.open(<AlertDialog {...dialogProps} />);
    }
    
    confirm(options : ConfirmDialogProps) : Promise<boolean> {
        return this.open(<ConfirmDialog {...options} />);
    }

    open<T>(element : React.ReactElement<T>) : Promise<boolean> {
        if(this.modalBackdrop == null) {
            this.showOverlay();
        }
        this.active = !this.active;

        ReactDOM.render(element, this.portalElement);

        let dialogRef = new DialogRef<T>();
        dialogRef.dialogElement = element;

        this.dialogStack = _.union(this.dialogStack, [dialogRef]);
        // TODO : here

        return Promise.resolve(true);
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