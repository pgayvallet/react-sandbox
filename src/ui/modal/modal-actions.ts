
// TODO : makes it extends Action<T>

export interface OpenModalAction {

    id : string;
    type : string;
    modalType : string;
    modalProperties : any;
    modalOptions : any;

}