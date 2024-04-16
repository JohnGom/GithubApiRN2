import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import ItemUserComponent from './itemUser';
import {useUsersActions, useUsersState} from '../../context/users';
import styles from './style';
import {RootStackParamList} from '../../route';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({navigation}: Props) => {
  const [isEmpty, setIsEmpty] = useState(false);
  const {users} = useUsersState();
  const {getUsers} = useUsersActions();

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  useEffect(() => {
    if (users === undefined) {
      setIsEmpty(true);
    }
  }, [users, setIsEmpty]);
  return (
    <View style={styles.viewContainer}>
      <View style={styles.viewHeader}>
        <Text style={styles.textTitle}>Usuarios</Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('NewUser')}
          style={styles.btnAdd}>
          <Icon name="add" color={'white'} size={30} />
        </TouchableOpacity>
      </View>
      {!isEmpty ? (
        <View style={styles.viewEmptyResult}>
          <Icon name={'info'} size={100} color={'lightgray'} />
          <Text style={styles.textTitleEmpty}>Aún no hay usuarios creados</Text>
        </View>
      ) : (
        <FlatList
          data={users}
          ItemSeparatorComponent={() => (<View style={styles.viewItemSeparator} />)}
          renderItem={({item}) => <ItemUserComponent user={item} />}
          keyExtractor={(item, index) => `${item.userGithub} ${index}`}
        />
      )}
    </View>
  );
};

export default HomeScreen;
