import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Promise from "bluebird";

import ModalPortal from "./modal-portal";

import {AlertDialog, AlertDialogProps, AlertDialogOptions} from "./alert-dialog";
import { ConfirmDialog, ConfirmDialogProps } from "./confirm-dialog";

import DialogRef from "./dialog-ref";
import * as _ from "lodash";
import DialogProps from "./dialog-props";

class Modal {

    private portalElement : HTMLElement;

    private dialogStack : DialogRef<any>[] = [];

    /**
     *
     * @param options
     * @return {Promise<any>}
     */
    alert(options : AlertDialogOptions) : Promise<void> {
        let dialogProps = new AlertDialogProps();
        _.extend(dialogProps, options);
        return this.open(<AlertDialog {...dialogProps} />);
    }

    /**
     *
     * @param {ConfirmDialogProps} options
     * @return {Promise<any>}
     */
    confirm(options : ConfirmDialogProps) : Promise<void> {
        return this.open(<ConfirmDialog {...options} />);
    }

    openModal<T extends React.Component<D, any>, D extends DialogProps>(componentClass : {new() : T}, componentProps : D) : Promise<void> {
        // TODO : use that.
        return null;
    } 
    
    /**
     *
     * @param element
     * @return {Promise<any>}
     */
    open<T>(element : React.ReactElement<T>) : Promise<any> {
        this.createPortal();

        let dialogRef = new DialogRef<T>();
        dialogRef.dialogElement = element;
        this.dialogStack = _.union(this.dialogStack, [dialogRef]);

        this.refreshPortal();

        return dialogRef.promise;
    }
    

    private createPortal() : void {
        if(this.portalElement != null) {
            return;
        }
        this.portalElement = document.createElement("div");
        this.portalElement.className = "modal-root";
        document.body.appendChild(this.portalElement);
    }

    private refreshPortal() : void {
        ReactDOM.render(<ModalPortal dialogStack={this.dialogStack}/>, this.portalElement);
    }
    
}

var instance = new Modal();
export default instance;