import * as React from "react";
import { connect } from 'react-redux';

import {openModal} from "../ui/modal/modal-action-creators";
import {registerModalType} from "../ui/modal/modal-registry";
import {ModalDialog} from "../ui/modal/modalDialog";
import {Dialog, DialogBody, DialogFooter, DialogHeader} from "../ui/modal/dialogBox";

import { loginRequest } from "../core/security/auth-action-creators";

export const LOGIN_DIALOG = "LOGIN_DIALOG";

export interface LoginDialogOptions {

    login? : string;
    password? : string;

}


interface LoginDialogDispatchProps {
    loginRequest: (user: string, password: string) => void;
}

type LoginDialogProps = LoginDialogOptions & LoginDialogDispatchProps;


let mapStateToProps = (state, props) => {
    return {
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        loginRequest : (user : string, password : string) => {
            dispatch(loginRequest(user, password))
        }
    };
};

class LoginDialog extends ModalDialog<LoginDialogProps, any> {

    state : any = {};

    render() {
        return (
            <Dialog>
                <DialogHeader>    
                    <h3>{"Login"}</h3>
                </DialogHeader>
                <DialogBody>
                    {"Veuillez vous connecter"}
                    <input type="text" name="login" value={this.state.login} onChange={this.handleFieldValueChange.bind(this, "login")}/>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleFieldValueChange.bind(this, "password")}/>
                </DialogBody>
                <DialogFooter>
                    <button onClick={this.performLogin.bind(this)}>Se connecter</button>
                </DialogFooter>
            </Dialog>
        );
    }

    handleFieldValueChange(fieldName, event) {
        this.setState({
            [fieldName] : event.target.value
        });
    }

    performLogin() {
        this.props.loginRequest(this.state.login, this.state.password);
    }


    componentWillMount():void {
        this.setState({
            login    : this.props.login || "",
            password : this.props.password || ""
        })
    }

}

registerModalType(LOGIN_DIALOG, connect(mapStateToProps, mapDispatchToProps)(LoginDialog as any));

export const openLoginDialog = (modalProperties : LoginDialogOptions = {}) => {
    return openModal(LOGIN_DIALOG, modalProperties, {});
};