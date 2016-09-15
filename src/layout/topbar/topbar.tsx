import * as React from "react";
import { Link } from "react-router";

export class Topbar extends React.Component<any, any> {

    state : any = {
        appLabel : "Taelys"
    };

    render() {
        //console.log("lala", this._reactInternalInstance);
        return (
            <div className="topbar">
                <div className="topbar-content">
                    <Link className="topbar-logo" to="/">
                        <img className="taelys-logo" src="/static/images/logo_taelys.svg"/>
                        <h3 className="app-name no-print">{this.state['appLabel']}</h3>
                    </Link>
                </div>
            </div>
        );
    }

}