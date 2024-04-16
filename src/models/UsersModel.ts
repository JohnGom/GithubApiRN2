export interface User {
    name?: string, 
    lastname?: string,
    email?: string, 
    identification?: string, 
    birthdate?: string, 
    userGithub?: string, 
    avatarUrl?: string, 
    url?: string, 
    repos?: number
  }

export type Users = User[]