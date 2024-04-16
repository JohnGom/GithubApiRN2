
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './style';

const ComponentRepoItem = ({ repo }) => {
  const { name, git_url, description, default_branch, language } = repo;
  return (
    <View>
      <View>
        <Icon name="arrow-forward" size={18} color={'black'} />
        <Text>{name}</Text>
      </View>
      <View style={styles.containerItems}>
        <Text style={styles.texttitleUrl}>Url Git</Text>
        <Text>{git_url}</Text>
      </View>
      {description ?
        <View style={styles.containerItems}>
          <Text>
            <Text style={styles.titleDescription}>
              Descripción:
            </Text> {description}
          </Text>
        </View> : null
      }
      <View>
        <View>
          <Icon name="message" size={18} color={'black'} />
          <Text>{default_branch}</Text>
        </View>
        {language ?
          <View style={styles.infoLanguage}>
            <Icon name="note" size={18} color={'black'} />
            <Text style={styles.textLan}>{language}</Text>
          </View> : null
        }
      </View>
    </View>
  )
}

export default ComponentRepoItem