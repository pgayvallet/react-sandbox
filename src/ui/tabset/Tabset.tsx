
import * as React from "react";
import Location = HistoryModule.Location;
import History = HistoryModule.History;
import * as classNames from "classnames";
import {t} from "../../core/i18n";
import * as _ from "lodash";
import {PureRenderComponent} from "../../core/react/PureRenderComponent";
import Router = ReactRouter.Router;
import { PageSection } from "../../core/routing/PageSection";
import { Ripple } from "../effects";



interface TabsetProps {

    tabs        : PageSection[]
    path        : string
    location    : Location

}

interface TabsetState {

    selectedTabIdx : number

}

export class Tabset extends React.Component<TabsetProps, TabsetState> {

    context : {
        router : any
    };
    
    static contextTypes : React.ValidationMap<any> = {
        router : React.PropTypes.object.isRequired    
    };
    
    state : TabsetState = {
        selectedTabIdx : 0
    };

    constructor() {
        super();
        this.navigateToTab = this.navigateToTab.bind(this);
    }

    render() {
        return (
            <div className="tabset tabset-page">
                <div className="tabset-panel">
                    {this.props.tabs.map( (tab, i) =>
                        <TabPill key={i}
                                 tab={tab}
                                 selected={i === this.state.selectedTabIdx}
                                 onClick={this.navigateToTab}/>
                    )}
                </div>
                <div className="tabset-content">
                    {this.props.tabs[this.state.selectedTabIdx].component != null && React.createElement(this.props.tabs[this.state.selectedTabIdx].component as any)}
                </div>
            </div>
        );
    }


    componentDidMount():void {
        this.computeActiveTab(this.props);
    }

    componentWillReceiveProps(nextProps:TabsetProps, nextContext:any):void {
        this.computeActiveTab(nextProps);
    }

    navigateToTab(tab : PageSection) {
        this.context.router.push(this.props.path + "/" + tab.fragment);
    }

    computeActiveTab(props:TabsetProps) {

        // TODO

        //console.log("Tabset : componentDidMount", props);

        let path = props.path; // '/inventaire'
        let completePath = props.location.pathname; // '/inventaire/portefeuilles'

        let currentFragment = completePath.substr(path.length + 1);
        // TODO : in case of nested : remove stuff after the next '/';

        let tabIndex = _.findIndex(props.tabs, tab => tab.fragment ===  currentFragment);

        this.setState({
            selectedTabIdx : tabIndex > -1 ? tabIndex : 0
        });


        //console.log("-> currentFrament =", currentFragment)
    }
}


interface TabPillProps {

    selected?   : boolean
    tab         : PageSection
    onClick     : (tab : PageSection) => void

}

class TabPill extends PureRenderComponent<TabPillProps, any> {

    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
    }

    render() {
        let tab = this.props.tab;
        // console.log("TabPill : render " + this.props.tab.fragment)
        return (
            <div className={classNames("tab-pill", {selected : this.props.selected})}
                 onClick={this.onClick}>
                <Ripple/>
                <i className={classNames("fa", tab.icon)}/>
                <span>{t(tab.labelKey)}</span>
            </div>
        );
    }

    onClick() {
        this.props.onClick(this.props.tab);
    }

}