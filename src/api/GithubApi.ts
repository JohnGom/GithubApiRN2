import {RepoUser, UserGithub} from '../models/GithubModel';

const URL = 'https://api.github.com/users';

export async function getUserGithub(
  username: string,
): Promise<UserGithub | undefined> {
  try {
    const response = await fetch(`${URL}/${username}`);
    const responseData = await response.json();
    return responseData as UserGithub;
  } catch (error) {}
}

export async function getUserGithubRepositories(username: string) {
  try {
    const response = await fetch(`${URL}/${username}/repos`);
    const responseData: any = await response.json();
    return responseData as RepoUser[];
  } catch (error) {}
}
