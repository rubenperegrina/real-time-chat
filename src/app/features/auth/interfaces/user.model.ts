export interface SignInCredentials {
    email: string;
    displayName: string;
    password: string;
}

export interface SignUpCredentials extends SignInCredentials {
    displayName: string;
}