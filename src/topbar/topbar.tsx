import * as React from "react";
import { Link } from "react-router";

export class Topbar extends React.Component<any, any> {
    
    render() {
        return (
            <div className="app-topbar">
                <Link className="topbar_el" to="/">Home !</Link>
            </div>
        );
    }
    
}