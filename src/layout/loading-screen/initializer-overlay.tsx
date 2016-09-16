import * as React from "react";

import {LoadingScreen} from "./loading-screen";
import {connect} from "../../core/connect";


interface InitializeOverlayProps {

    initialized : boolean

}

let mapStateToProps = (state, props) : InitializeOverlayProps => {
    return {
        initialized : false
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
