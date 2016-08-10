import { ACTION_TYPES } from "./modal-reducer";


export interface OpenModalAction {

    type : string;
    modalType : string;
    modalProperties : any;
    modalOptions : any;

}

/**
 *
 * @param modalType         The type of the modal to open
 * @param modalProperties     [optional] The props to attach to the modal component
 * @param modalOptions      [optional] The modalOptions to open the dialog with
 * @return {{type: string}}
 */
export const openModal = (modalType : string, modalProperties : any = {}, modalOptions = {}) : OpenModalAction => {
    return {
        type : ACTION_TYPES.OPEN_MODAL,
        modalType,
        modalProperties,
        modalOptions
    };
};

/**
 *
 * @param modalId
 */
export const closeModal = (modalId) => {
    return {
        type : ACTION_TYPES.CLOSE_MODAL,
        modalId
    };
};