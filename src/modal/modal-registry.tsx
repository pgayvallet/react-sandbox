
// TODO : remove class, export plain methods instead

class ModalRegistry {

    private _registry = {};

    registerModalType(modalType : string, componentClass : any) {
        // console.log("registerModalType -> " + modalType);
        this._registry[modalType] = componentClass;
    }

    getModalType(modalType : string) {
        return this._registry[modalType];
    }

}

let registry = new ModalRegistry();

export default registry;


