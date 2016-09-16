import { call, take, put, fork, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { httpClient } from "../http";
import * as ActionTypes from "./i18n-action-types";
import {Locale, I18nBundle} from "./i18n-model";
import { isBundleLoaded } from "./i18n-selectors";
import {Action} from "../actions/Action";
import {applySetLocale, loadBundleRequest, loadBundleSuccess} from "./i18n-action-creators";
import AxiosXHR = Axios.AxiosXHR;
import IPromise = Axios.IPromise;



export function* i18nSaga() : any {

    function* setLocaleScheduler() : any {
        while(true) {
            let {payload : locale} : Action<Locale> = yield take(ActionTypes.SET_LOCALE_REQUEST);
            yield setLocaleSaga(locale);
        }
    }
    
    yield [
        call(setLocaleScheduler)
    ]
}


function* setLocaleSaga(locale : Locale) : any {
    let bundleLoaded = yield select(isBundleLoaded, locale);
    if(!bundleLoaded) {
        yield put(loadBundleRequest(locale));
        let { data : bundles } = yield doPerformLoadBundle(locale);
        yield put(loadBundleSuccess(locale, bundles));
    }

    // TODO : change moment locale, etc, from i18n-manager.

    yield put(applySetLocale(locale));
}



function doPerformLoadBundle(locale : Locale) : IPromise<AxiosXHR<I18nBundle>> {
    return httpClient.get("/rest/translations/tael", {
        params : {
            lang : locale.language
        }
    })
}
