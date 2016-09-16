import * as React from "react";

import { CircularLoader } from "../../ui/loaders";


export class LoadingScreen extends React.Component<{}, {}> {

    render() {
        return (
            <div className="app-loading-screen">
                <div>
                    <CircularLoader/>
                    <span className="loading-text">Loading application...</span>
                </div>
            </div>
        );
    }

}