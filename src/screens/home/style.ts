import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  viewContainer: {
    backgroundColor: '#FFFFFF',
  },
    viewHeader: {
      backgroundColor: '#25292E',
    },
      textTitle: {
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    viewEmptyResult: {
      flex: 0,
      alignSelf: 'center',
      alignItems: 'center',
      marginTop: deviceHeight / 4,
    },
      iconEmpty: {
        fontSize: deviceWidth / 3,
        color: '#00000060',
      },
      textTitleEmpty: {
        fontWeight: 'bold',
        color: '#25292E',
      },
      btnNewUser: {
        flex: 0,
        alignSelf: 'center',
        marginVertical: deviceHeight / 20,
        paddingVertical: deviceHeight / 50,
        paddingHorizontal: deviceWidth / 20,
        borderRadius: deviceWidth,
        backgroundColor: '#39C758',
      },
});
