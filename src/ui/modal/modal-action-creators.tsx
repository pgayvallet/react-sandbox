import { ActionTypes } from "./modal-reducer";


// TODO : makes it extends Action<T>

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
        type : ActionTypes.OPEN_MODAL,
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
        type : ActionTypes.CLOSE_MODAL,
        modalId
    };
};