import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
import {User} from '../../../models/UsersModel';
import {RootStackParamList} from '../../../route';

type Props = NativeStackNavigationProp<RootStackParamList>;

const ItemUserComponent = ({user}: {user: User}) => {
  const {avatarUrl, name, lastname, userGithub} = user;
  const {navigate} = useNavigation<Props>();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigate('UserInfo', {user})}
      style={styles.viewContainer}>
      <Image
        source={{uri: avatarUrl}}
        resizeMode={'cover'}
        style={styles.imgProfile}
      />
      <View style={styles.viewContentText}>
        <Text style={styles.textName}>
          {name} {lastname}
        </Text>
        <Text style={styles.textNickName}>@{userGithub}</Text>
      </View>
      <View style={styles.viewRight}>
        <Icon name={'chevron-right'} size={30} color={'black'} />
      </View>
    </TouchableOpacity>
  );
};

export default ItemUserComponent;
