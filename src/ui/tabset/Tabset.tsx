
import * as React from "react";
import * as classNames from "classnames";
import {SectionDescriptor} from "../../sections/inventaire/index";
import {t} from "../../core/i18n";



interface TabsetProps {

    tabs : SectionDescriptor[]

}

export class Tabset extends React.Component<TabsetProps, any> {


    render() {
        return (
            <div className="tabset tabset-page">
                <div className="tabset-panel">
                    {this.props.tabs.map( (tab, i) => <TabPill key={i} tab={tab}/>)}
                </div>
                <div className="tabset-content">
                    <TabContent/>
                </div>
            </div>
        );
    }


}


interface TabPillProps {

    tab : SectionDescriptor

}

class TabPill extends React.Component<TabPillProps, any> {

    constructor() {
        super();
        this.onPillClick = this.onPillClick.bind(this);
    }

    render() {
        return (
            <div className="tab-pill" onClick={this.onPillClick}>
                {t(this.props.tab.labelKey)}
            </div>
        );
    }

    onPillClick() {
        console.log("pill clicked !", this.props.tab);
    }

}

class TabContent extends React.Component<any, any> {

    render() {
        return (
            <div className="tab-content">
                Tab Content
            </div>
        );
    }

}