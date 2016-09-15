import * as React from "react";
//noinspection TypeScriptCheckImport
import { I18nManager } from "./i18n-manager";

export interface I18nProviderProps {

    manager : I18nManager

}

export class I18nProvider extends React.Component<I18nProviderProps, any> {
    
    context : any;
    
    static contextTypes = {
        store : React.PropTypes.object.isRequired
    };
    
    static childContextTypes = {
        t : React.PropTypes.func    
    };

    getChildContext() {
        return {
            t : this.props.manager.translate
        }
    }
    
    render() {
        return React.Children.only(this.props.children);
    }

}