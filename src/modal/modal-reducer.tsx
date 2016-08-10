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
            // TODO : implement
            return state;
        default:
            return state
    }
};

let openModal = (state, action) => {
    let newModal = {
        uid : _.uniqueId("modal-")
    };
    let modals = [...state.modals, newModal];
    return Object.assign({}, state, { modals });
};

export default modalReducer;