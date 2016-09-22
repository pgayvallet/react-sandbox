
import * as React from "react";
import * as classNames from "classnames";

export class Tabset extends React.Component<any, any> {


    render() {
        return (
            <div className="tabset tabset-page">
                <div className="tabset-panel">
                    <TabPill/>
                    <TabPill/>
                    <TabPill/>
                </div>
                <div className="tabset-content">
                    <TabContent/>
                </div>
            </div>
        );
    }


}

class TabPill extends React.Component<any, any> {

    render() {
        return (
            <div className="tab-pill">
                Tab pill
            </div>
        );
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