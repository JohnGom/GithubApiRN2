import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Credentials} from '../context/auth/AuthContext';

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
    const users = await firestore().collection('Users').get();

    return users;
  } catch (error) {
    
  }
}
