import * as React from "react";
import { connect } from 'react-redux';

import { openConfirmDialog, openAlertDialog } from "../modal";

let mapStateToProps = (state, props) => {
    return {};
};

let mapDispatchToProps = (dispatch) => {
    return {
        openTestPopin : () => {
            dispatch(openConfirmDialog({
                confirmAction : openAlertDialog({text : "confirmation's confirmation !"})
            }));
        },
    };
};

class Home extends React.Component<any, any> {

    props : any;

    render() {
        return (
            <div>
                Ceci est la home
                <button onClick={this.openPopin.bind(this)}>Ouvrir la popin</button>
            </div>
        );
    }

    openPopin() {
        //console.log("open popin");
        //console.log(this.props.dispatch, this.props.openTestPopin);
        this.props.openTestPopin();
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
