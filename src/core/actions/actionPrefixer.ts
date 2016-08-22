

export function getActionNameBuilder(prefix : string) {
    return function getActionName(actionName : string) {
        return prefix + "/" + actionName;
    }
}