
import { getActionNameBuilder } from "../../core/actions/actionPrefixer";

const TOASTR_ACTION_PREFIX = "TOASTR";
let addPrefix = getActionNameBuilder(TOASTR_ACTION_PREFIX);

export const ADD_NOTIFICATION = addPrefix("ADD_NOTIFICATION");

export const REMOVE_NOTIFICATION = addPrefix("REMOVE_NOTIFICATION");