

export interface LoginRequest {
    
    login    : string;
    password : string;
    
}

export interface LoginError {
    
    errorMessage        : string;
    
}

export interface LoginSuccess {

    authenticationToken : string;
    
}