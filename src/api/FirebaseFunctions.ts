import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Credentials} from '../context/auth/AuthContext';
import {User} from '../models/UsersModel';

const ref = firestore().collection('Users');

export async function signInFirebase(
  credentials: Credentials,
  _onSuccess?: (user: FirebaseAuthTypes.User) => any,
  _onError?: () => any,
) {
  try {
    const result = await auth().createUserWithEmailAndPassword(
      credentials.email,
      credentials.password,
    );

    return result.user;
  } catch (error) {
    if (_onError) {
      _onError();
    }
  }
}

export async function getUsersFirebase() {
  try {
    const users = await ref.get();
    const finalUsers = users.docs.map(user => user.data() as User);
    return finalUsers;
  } catch (error) {
    console.log('error', error);
  }
}

export async function saveUsersFirebase(user: User) {
  try {
    await ref.add(user);
  } catch (error) {
    console.log('error', error);
  }
}
