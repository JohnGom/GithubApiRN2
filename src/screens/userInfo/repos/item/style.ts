import {StyleSheet, Dimensions} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  infoLanguage: {
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
  },
  textLan: {
    marginLeft: 10
  },
  containerItems: {
    marginLeft: 10,
    marginBottom: 5
  },
  texttitleUrl: {
    fontSize: 13
  },
  titleDescription: {
    fontSize: 15,
    fontWeight: 'bold'
  },
});
