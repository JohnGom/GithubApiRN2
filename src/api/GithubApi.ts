import { UserGithub } from "../models/GithubModel";

const URL = `https://api.github.com/`

export async function getUserGithub(username: string): Promise<UserGithub | undefined> {
    try {
      const user: UserGithub = await fetch(`${URL}/users/${username}`)
      return user;
    } catch (error) {
        
    }
  }