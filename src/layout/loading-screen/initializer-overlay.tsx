import * as React from "react";
import { createSelector } from "reselect";

import {LoadingScreen} from "./loading-screen";
import {connect} from "../../core/connect";

import { isInitialized as isI18nInitialized } from "../../core/i18n/i18n-selectors"

const isAppInitializedSelector = createSelector(
    isI18nInitialized,
    (i18nInitialized : boolean) => {
        return i18nInitialized
    }
);

interface InitializeOverlayProps {

    initialized : boolean

}

let mapStateToProps = (state, props) : InitializeOverlayProps => {
    return {
        initialized : isAppInitializedSelector(state)
    };
};


export let InitializerOverlay = connect(mapStateToProps)(class _InitializeOverlay extends React.Component<InitializeOverlayProps, any> {

    render() {
        if(this.props.initialized) {
            return React.Children.only(this.props.children);
        } else {
            return <LoadingScreen/>;
        }
    }
    
});
