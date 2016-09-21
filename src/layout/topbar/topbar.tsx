import * as React from "react";
import * as classNames from "classnames";
import { Link } from "react-router";
import {PureRenderComponent} from "../../core/react/PureRenderComponent";

export class Topbar extends React.Component<any, any> {

    state : any = {
        appLabel : "React"
    };

    render() {
        return (
            <div className="topbar">
                <div className="topbar-content">
                    <Link className="topbar-logo" to="/">
                        <img className="taelys-logo" src="/static/images/logo_taelys.svg"/>
                        <h3 className="app-name no-print">{this.state['appLabel']}</h3>
                    </Link>

                    <ul className="topbar-nav">

                        <TopbarNavElement labelKey="Home" icon="fa-home" url="/"/>
                        <TopbarNavElement labelKey="Inventaire" icon="fa-folder-open" url="/inventaire"/>


                    </ul>
                </div>
            </div>
        );
    }

}


interface TopbarNavElementProps {

    labelKey : string
    url      : string
    icon     : string

}

export class TopbarNavElement extends PureRenderComponent<TopbarNavElementProps, any> {

    render() {
        // TODO : classe selected quand selectionné
        return (
            <li className="topbar-nav-el">
                <Link to={this.props.url}>
                    <i className={classNames("fa", this.props.icon)}/>
                    <span>{this.props.labelKey}</span>
                </Link>
            </li>
        );
    }

}