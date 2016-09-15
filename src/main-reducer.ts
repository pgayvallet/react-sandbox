import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { modalReducer } from "./ui/modal/modal-reducer";
import { toastrReducer } from "./ui/toastr/toastr-reducer";
import { apiReducer } from "./core/api/api-reducer";
import { authReducer } from "./core/security/auth-reducer";
import { i18nReducer } from "./core/i18n/i18n-reducer";

export const mainReducer = combineReducers({
    api     : apiReducer,
    modal   : modalReducer,
    toastr  : toastrReducer,
    routing : routerReducer,
    auth    : authReducer,
    i18n    : i18nReducer
});
