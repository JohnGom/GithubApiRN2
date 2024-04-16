import {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ItemRepoComponent from './item';
import styles from './style';

const ReposList = ({ route }) => {
  const { repositories } = route.params;
  const [index, setIndex] = useState(0);
  const [pagedList, setPagedList] = useState('');
  return (
    <View>
      {pagedList.length > 0 ?
        <View>
          <FlatList
            data={pagedList[index]}
            renderItem={({ item }) => <ItemRepoComponent repo={item} />}
            keyExtractor={item => item.node_id}
          />
          {repositories.length > 5 ?
            <View style={styles.viewContainPagination}>
              <TouchableOpacity
                disabled={index === 0}
                onPress={() => console.log("this.previousPage")}
                style={styles.btnPagination}
              >
                <Icon name="arrow-back" size={18} color={'black'} />
              </TouchableOpacity>
              <Text style={styles.textPag} >
                {index + 1} / {pagedList.length}
              </Text>
              <TouchableOpacity
                disabled={index === pagedList.length - 1}
                onPress={() => console.log("this.nextPage")}
                style={styles.btnPagination}
              >
                <Icon name="arrow-forward" size={18} color={'black'} />
              </TouchableOpacity>
            </View>
            : null
          }
        </View>
        : null
      }
    </View>
  )
}

export default ReposList