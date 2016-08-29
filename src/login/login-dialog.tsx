import * as React from "react";

import {openModal} from "../ui/modal/modal-action-creators";
import {registerModalType} from "../ui/modal/modal-registry";
import {ModalDialog} from "../ui/modal/modalDialog";
import {Dialog, DialogBody, DialogFooter, DialogHeader} from "../ui/modal/dialogBox";

export const LOGIN_DIALOG = "LOGIN_DIALOG";

export interface LoginDialogOptions {

    login? : string;
    password? : string;

}

class LoginDialog extends ModalDialog<LoginDialogOptions, any> {

    render() {
        return (
            <Dialog>
                <DialogHeader>    
                    <h3>{"Login"}</h3>
                </DialogHeader>
                <DialogBody>
                    {"Veuillez vous connecter"}
                </DialogBody>
                <DialogFooter>
                    <button onClick={this.performLogin.bind(this)}>Se connecter</button>
                </DialogFooter>
            </Dialog>
        );
    }

    performLogin() {
        // TODO
    }


}

registerModalType(LOGIN_DIALOG, LoginDialog);

export const openLoginDialog = (modalProperties : LoginDialogOptions = {}) => {
    return openModal(LOGIN_DIALOG, modalProperties, {});
};