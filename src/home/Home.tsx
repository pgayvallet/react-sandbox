import * as React from "react";
import { connect } from 'react-redux';

import { openConfirmDialog, openAlertDialog } from "../ui/modal";
import { addWarning } from "../ui/toastr";

import { apiCallRequest } from "../core/api/api-action-creators";

import { isDataLoaded } from "../core/api/api-selectors";

import { HighchartTest } from "./HighchartTest";

let DUMMY_DATA_KEY = "dummyHomeData";

let mapStateToProps = (state, props) => {
    return {
        dataLoaded : isDataLoaded(state.api, DUMMY_DATA_KEY)
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        openTestPopin : () => {
            dispatch(openConfirmDialog({
                confirmAction : openAlertDialog({text : "confirmation's confirmation !"})
            }));
        },
        addToast : () => {
            dispatch(addWarning("hello dolly"))
        },
        testApi : () => {
            dispatch(apiCallRequest(DUMMY_DATA_KEY, "/rest/hello"))
        }
    };
};

class Home extends React.Component<any, any> {

    props : any;

    render() {
        return (
            <div>
                Coucou. Ceci est la home. Dataloaded : {this.props.dataLoaded + ""}
                <br/>
                <button className="btn btn-primary" onClick={this.openPopin.bind(this)}>Ouvrir la popin</button>
                <br/><br/>
                <button className="btn btn-primary" onClick={this.addToast.bind(this)}>Ajouter un toast</button>
                <br/><br/>
                <button className="btn btn-primary" onClick={this.testApi.bind(this)}>Test API</button>

                <HighchartTest/>

            </div>
        );
    }

    openPopin() {
        this.props.openTestPopin();
    }

    addToast() {
        this.props.addToast();
    }

    testApi() {
        this.props.testApi();
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
