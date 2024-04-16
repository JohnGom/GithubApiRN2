import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

const ItemUserComponent = ({user}) => {
    const { avatarUrl, name, lastname, userGithub } = user;
    const {navigate} = useNavigation()
    return (
      <TouchableOpacity
        onPress={() => { navigate('userInfo', user) }}
      >
        <View>
          <Image source={{ uri: avatarUrl }} />
        </View>
        <View>
          <Text style={styles.textName}>
            {name} {lastname}
          </Text>
          <Text style={styles.textNickName}>
            {userGithub}
          </Text>
        </View>
        <View style={styles.viewRight}>
          <Icon
            name="ios-arrow-forward"
            style={styles.iconDatail}
          />
        </View>
      </TouchableOpacity>
    );

}

export default ItemUserComponent