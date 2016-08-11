import * as _ from "lodash";

export const ACTION_TYPES = {
    OPEN_MODAL  : "MODAL/OPEN_MODAL",
    CLOSE_MODAL : "MODAL/CLOSE_MODAL"
};

let initialState = {
    modals : []
};

const modalReducer = (state : any = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.OPEN_MODAL :
            return openModal(state, action);
        case ACTION_TYPES.CLOSE_MODAL :
            return closeModal(state, action);
        default:
            return state;
    }
};

let openModal = (state, action) => {
    let newModal = {
        id     : _.uniqueId("modal-"),
        type    : action.modalType,
        props   : action.modalProperties,
        options : action.modalOptions
    };
    let modals = [...state.modals, newModal];
    return _.extend({}, state, { modals });
};

let closeModal = (state, action) => {
    let modalId = action.modalId;
    let modal = _.find(state.modals, { id : modalId });
    if(modal != null) {
        let index = _.indexOf(state.modals, modal);
        let modals = [
            ...state.modals.slice(0, index),
            ...state.modals.slice(index + 1)
        ];
        return _.extend({}, state, { modals });
    }
};

export default modalReducer;