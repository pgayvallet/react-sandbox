

interface CloseCallback {
    (n: any): void;
}
interface DismissCallback {
    (): void;
}

export default class DialogProps {

    close : CloseCallback = null;
    dismiss : DismissCallback = null;
    
    constructor() {
    }
    
}