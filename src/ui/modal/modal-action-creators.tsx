import { ActionTypes } from "./modal-reducer";
import {OpenModalAction} from "./modal-actions";






/**
 *
 * @param modalType         The type of the modal to open
 * @param modalProperties     [optional] The props to attach to the modal component
 * @param modalOptions      [optional] The modalOptions to open the dialog with
 * @return {{type: string}}
 */
export const openModal = (modalType : string, modalProperties : any = {}, modalOptions : any = {}) : OpenModalAction => {
    return {
        id      : modalOptions.id || _.uniqueId("modal-"),
        type    : ActionTypes.OPEN_MODAL,
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