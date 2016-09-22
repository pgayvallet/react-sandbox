

export interface AuthState {

    authenticated   : boolean
    authenticating  : boolean
    
    user?           : User

    authenticationToken? : string
    errorCount    : number  
    errorMessage? : string

}

export interface User {

    id              : string,
    compteId        : string,
    email           : string,
    nom             : string,
    prenom          : string,
    habilitations   : string[]

}