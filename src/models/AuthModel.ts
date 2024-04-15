export type ApiToken = string;

export interface ApiUser {
    id?: string;
    userName: string;
    firstName: string;
    lastName: string;
    isLoggedIn: boolean
};