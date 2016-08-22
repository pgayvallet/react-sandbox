import { call, take, put, fork } from 'redux-saga/effects';
import { delay } from 'redux-saga'

import { ADD_NOTIFICATION } from "./toastr-action-types";
import { removeToast } from "./toastr-action-creators";
import {Toast} from "./toastr-model";

export function* toastrSaga(getState) : any {

    function* toastScheduler() : any {
        while(true) {
            let action = yield take(ADD_NOTIFICATION);
            let toast : Toast = action.payload;
            yield fork(handleToast, toast);
        }
    }

    function* handleToast(toast : Toast) : any {
        yield delay(toast.delay);
        yield put(removeToast(toast.id));
    }

    yield [
        call(toastScheduler)
    ];
}

