

export interface AuthState {

    authenticated   : boolean
    authenticating  : boolean

    authenticationToken? : string
    errorCount    : number  
    errorMessage? : string

}