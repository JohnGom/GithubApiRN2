import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Text, View, Image, Linking, TouchableOpacity} from 'react-native';
import styles from './style';
import {User} from '../../../models/UsersModel';

type Props = {
  user: User;
};

const UserDetailScreen: React.FC<Props> = ({user}) => {
  const {
    name,
    lastname,
    email,
    identification,
    birthdate,
    userGithub,
    avatarUrl,
    url,
    repos,
  } = user;
  return (
    <View style={styles.viewContainer}>
      <View style={styles.viewContentAvatar}>
        <Image source={{uri: avatarUrl}} style={styles.imgAvatar} />
        <Text style={styles.textName}>
          {name} {lastname}
        </Text>
        <Text style={styles.textNick}>{userGithub}</Text>
      </View>
      <View style={styles.viewContentDescription}>
        <View style={styles.viewItemDescription}>
          <View style={styles.viewIconDescription}>
            <Icon name="mail" style={styles.iconDescription} />
          </View>
          <Text style={styles.textDescription}>{email}</Text>
        </View>
        <View style={styles.viewItemDescription}>
          <View style={styles.viewIconDescription}>
            <Icon name="fingerprint" style={styles.iconDescription} />
          </View>
          <Text style={styles.textDescription}>{identification}</Text>
        </View>
        <View style={styles.viewItemDescription}>
          <View style={styles.viewIconDescription}>
            <Icon name="event" style={styles.iconDescription} />
          </View>
          <Text style={styles.textDescription}>{birthdate}</Text>
        </View>
        <View style={styles.viewItemDescription}>
          <View style={styles.viewIconDescription}>
            <Icon name="link" style={styles.iconDescription} />
          </View>
          <TouchableOpacity
            onPress={() => {
              if (url) {
                Linking.openURL(url);
              }
            }}>
            <Text style={styles.textUrl}>{url}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewItemDescription}>
          <View style={styles.viewIconDescription}>
            <Icon name="dns" style={styles.iconDescription} />
          </View>
          <Text style={styles.textDescription}>{repos}</Text>
        </View>
      </View>
    </View>
  );
};
export default UserDetailScreen;
