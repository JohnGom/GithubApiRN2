import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './style';

const ItemUserComponent = ({user}) => {
  const {avatarUrl, name, lastname, userGithub} = user;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => console.log('')}
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
