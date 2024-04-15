import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './style';

const ItemUserComponent = ({user}) => {
    const { avatarUrl, name, lastname, userGithub } = user;
    return (
      <TouchableOpacity
        onPress={() => {  }}
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