

let registry = {};

export let registerModalType = (modalType : string, componentClass : any) => {
    registry[modalType] = componentClass;
};

export let getModalType = (modalType : string) => {
    return registry[modalType];
};

