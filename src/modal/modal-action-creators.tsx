import { ACTION_TYPES } from "./modal-reducer";

/**
 *
 * @param modalType         The type of the modal to open
 * @param modalProperties     [optional] The props to attach to the modal component
 * @param modalOptions      [optional] The modalOptions to open the dialog with
 * @return {{type: string}}
 */
export const openModal = (modalType, modalProperties = {}, modalOptions = {}) => {
    console.log("creating openModal action thunk");
    return (dispatch) => {
        dispatch({
            type : ACTION_TYPES.OPEN_MODAL,
            modalType,
            modalProperties,
            modalOptions
        });
        // TODO : return promise !
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
    }
};