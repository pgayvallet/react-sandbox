import * as React from "react";
import { connect } from 'react-redux';

import {openModal} from "../ui/modal/modal-action-creators";
import {registerModalType} from "../ui/modal/modal-registry";
import {ModalDialog} from "../ui/modal/modalDialog";
import {Dialog, DialogBody, DialogFooter, DialogHeader} from "../ui/modal/dialogBox";

import { loginRequest } from "../core/security/auth-action-creators";
import { isAuthenticated, getAuthState } from "../core/security/auth-selectors";

export const LOGIN_DIALOG = "LOGIN_DIALOG";

export interface LoginDialogOptions {

    login? : string;
    password? : string;

}

// state props

interface LoginDialogStateProps {

    isAuthenticated : boolean
    errorCount      : number,
    errorMessage    : string

}

let mapStateToProps = (state) : LoginDialogStateProps => {
    return {
        isAuthenticated : isAuthenticated(state),
        errorCount      : getAuthState(state).errorCount,
        errorMessage    : getAuthState(state).errorMessage
    };
};

// action creators

interface LoginDialogDispatchProps {
    loginRequest: (user: string, password: string) => void;
}

let mapDispatchToProps = (dispatch) : LoginDialogDispatchProps => {
    return {
        loginRequest : (user : string, password : string) => {
            dispatch(loginRequest(user, password))
        }
    };
};

// type

type LoginDialogProps = LoginDialogOptions & LoginDialogDispatchProps & LoginDialogStateProps;

class LoginDialog extends ModalDialog<LoginDialogProps, any> {

    state : any = {};

    render() {
        return (
            <Dialog>
                <DialogHeader>    
                    <h3>{"Login"}</h3>
                </DialogHeader>
                <DialogBody>
                    <span>Veuillez vous connecter</span>
                    <br/>
                    <span>Error count : {this.props.errorCount}</span>
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