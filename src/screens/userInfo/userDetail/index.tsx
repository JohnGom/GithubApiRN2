import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet, Text, View, Image, Linking, TouchableOpacity } from 'react-native';
import styles from './style';

const UserDetailScreen = ({ route }) => {
  const { user } = route.params;
  const {
    name,
    lastname,
    email,
    identification,
    birthdate,
    userGithub,
    avatarUrl,
    url,
    repos
  } = user;
  return (
    <View style={StyleSheet.flatten(styles.viewContainer)}>
      <View style={StyleSheet.flatten(styles.viewContentAvatar)}>
        <Image
          source={{ uri: avatarUrl }}
          style={StyleSheet.flatten(styles.imgAvatar)}
        />
        <Text style={StyleSheet.flatten(styles.textName)}>
          {name} {lastname}
        </Text>
        <Text style={StyleSheet.flatten(styles.textNick)}>
          {userGithub}
        </Text>
      </View>
      <View style={StyleSheet.flatten(styles.viewContentDescription)}>
        <View style={StyleSheet.flatten(styles.viewItemDescription)}>
          <View style={StyleSheet.flatten(styles.viewIconDescription)}>
            <Icon
              name='md-mail'
              style={StyleSheet.flatten(styles.iconDescription)}
            />
          </View>
          <Text style={StyleSheet.flatten(styles.textDescription)}>
            {email}
          </Text>
        </View>
        <View style={StyleSheet.flatten(styles.viewItemDescription)}>
          <View style={StyleSheet.flatten(styles.viewIconDescription)}>
            <Icon
              name='md-finger-print'
              style={StyleSheet.flatten(styles.iconDescription)}
            />
          </View>
          <Text style={StyleSheet.flatten(styles.textDescription)}>
            {identification}
          </Text>
        </View>
        <View style={StyleSheet.flatten(styles.viewItemDescription)}>
          <View style={StyleSheet.flatten(styles.viewIconDescription)}>
            <Icon
              name='md-calendar'
              style={StyleSheet.flatten(styles.iconDescription)}
            />
          </View>
          <Text style={StyleSheet.flatten(styles.textDescription)}>
            {birthdate}
          </Text>
        </View>
        <View style={StyleSheet.flatten(styles.viewItemDescription)}>
          <View style={StyleSheet.flatten(styles.viewIconDescription)}>
            <Icon
              name='logo-github'
              style={StyleSheet.flatten(styles.iconDescription)}
            />
          </View>
          <TouchableOpacity onPress={() => { Linking.openURL(url); }}>
            <Text style={StyleSheet.flatten(styles.textUrl)}>
              {url}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={StyleSheet.flatten(styles.viewItemDescription)}>
          <View style={StyleSheet.flatten(styles.viewIconDescription)}>
            <Icon
              name='md-git-branch'
              style={StyleSheet.flatten(styles.iconDescription)}
            />
          </View>
          <Text style={StyleSheet.flatten(styles.textDescription)}>
            {repos}
          </Text>
        </View>
      </View>
    </View>
  );
}
export default UserDetailScreen;
