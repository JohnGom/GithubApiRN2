import {useContext, useMemo} from 'react';
import {UsersContext} from './UsersContext';
import {getUsersFirebase, saveUsersFirebase} from '../../api/FirebaseFunctions';
import {User} from '../../models/UsersModel';
import {getUserGithubRepositories} from '../../api/GithubApi';

export const useUsersState = () => {
  const {users, repos, saved} = useContext(UsersContext);

  return useMemo(
    () => ({
      users,
      repos,
      saved,
    }),
    [users, repos, saved],
  );
};

export const useUsersActions = () => {
  const {dispatch} = useContext(UsersContext);

  return useMemo(() => {
    return {
      async getUsers() {
        try {
          const users = await getUsersFirebase();
          if (users) {
            return dispatch({type: 'USERS_FETCH', users});
          }
        } catch (error) {}
      },

      async saveUser(user: User) {
        try {
          await saveUsersFirebase(user);
          return dispatch({type: 'SAVE_USER'});
        } catch (error) {}
      },

      async getReposUser(username: string) {
        try {
          const repos = await getUserGithubRepositories(username);
          if (repos) {
            return dispatch({type: 'REPOS_USER', repos});
          }
        } catch (error) {}
      },
    };
  }, [dispatch]);
};
