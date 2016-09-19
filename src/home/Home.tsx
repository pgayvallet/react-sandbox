import * as React from "react";
//import { connect } from 'react-redux';

import { openConfirmDialog, openAlertDialog } from "../ui/modal";
import { addWarning } from "../ui/toastr";

import { apiCallRequest } from "../core/api/api-action-creators";

import { isDataLoaded } from "../core/api/api-selectors";

import { HighchartTest } from "./HighchartTest";
import {connect} from "../core/connect";

import { t } from "../core/i18n";
import {Locale} from "../core/i18n/i18n-model";
import {setLocale} from "../core/i18n/i18n-action-creators";

import { Btn, BtnPrimary, BtnSecondary, BtnWarning } from "../ui/buttons";

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
        },
        setLanguage : (locale : Locale) => {
            dispatch(setLocale(locale))
        }
    };
};

class Home extends React.Component<any, any> {

    props : any;

    render() {
        return (
            <div>
                Coucou. Ceci est la home. Dataloaded : {this.props.dataLoaded + ""} -> {t("Email.invalid")}
                <br/>
                <BtnPrimary onClick={this.openPopin.bind(this)}>Ouvrir la popin</BtnPrimary>
                <br/><br/>
                <BtnSecondary onClick={this.addToast.bind(this)}>Ajouter un toast</BtnSecondary>
                <br/><br/>
                <BtnWarning onClick={this.testApi.bind(this)}>Test API</BtnWarning>

                <br/><br/>
                <button className="btn btn-primary" onClick={this.props.setLanguage.bind(this, 'fr_FR')}>Locale FR</button>
                <br/><br/>
                <button className="btn btn-primary" onClick={this.props.setLanguage.bind(this, 'en_EN')}>Locale EN</button>

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
