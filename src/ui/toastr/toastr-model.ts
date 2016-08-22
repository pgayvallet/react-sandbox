

export enum ToastType {
    
    INFO,
    
    WARNING,

    ERROR
    
}


export class Toast {

    id : string;

    type : ToastType;

    icon : string;

    delay : number;

    message : string;
    
}