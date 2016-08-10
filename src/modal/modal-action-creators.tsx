import { ACTION_TYPES } from "./modal-reducer";

/**
 *
 * @param modalType         The type of the modal to open
 * @param modalProperty     [optional] The props to attach to the modal component
 * @param modalOptions      [optional] The modalOptions to open the dialog with
 * @return {{type: string}}
 */
export const openModal = (modalType, modalProperty = {}, modalOptions = {}) => {
    console.log("creating openModal action thunk");
    return (dispatch) => {
        dispatch({
            type : ACTION_TYPES.OPEN_MODAL,
            modalType,
            modalProperty,
            modalOptions
        });
        // TODO : return promise !
    };

};