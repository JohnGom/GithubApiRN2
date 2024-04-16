import {useContext, useMemo} from 'react'
import {UsersContext} from './UsersContext'
import {getUsersFirebase} from '../../api/FirebaseFunctions'

export const useUsersState = () => {
  const {users} = useContext(UsersContext);

  return useMemo(
    () => ({
      users,
    }),
    [users],
  );
};

export const useUsersActions = () => {
  const {dispatch} = useContext(UsersContext);

  return useMemo(() => {
    return {
      async getUsers() {
        try {
          const users = await getUsersFirebase();
          return dispatch({type: "USERS_FETCH", users: []})
        } catch (error) {}
      },

    };
  }, [dispatch]);
};
