import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  viewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
    iconLogo: {
      fontSize: deviceWidth / 5,
      color: '#25292E',
    },
    viewForm: {
      flex: 0,
      marginTop: deviceHeight / 50,
      paddingVertical: deviceHeight / 20,
      paddingHorizontal: deviceWidth / 20,
    },
      textInputView: {
        flex: 0,
        flexDirection: 'row',
        width: deviceWidth / 1.5,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: deviceHeight / 100,
        paddingHorizontal: deviceWidth / 50,
        borderWidth: 0.5,
        borderColor: '#25292E20',
        borderRadius: deviceWidth,
        backgroundColor: '#F1F1F1',
      },
        icon: {
          margin: deviceWidth / 50,
          color: '#25292E',
        },
        textInput: {
          flex: 1,
          color: '#25292E',
          backgroundColor: 'transparent',
        },
      btnLogin: {
        flex: 0,
        alignSelf: 'center',
        marginVertical: deviceHeight / 20,
        paddingVertical: deviceHeight / 50,
        paddingHorizontal: deviceWidth / 20,
        borderRadius: deviceWidth,
        backgroundColor: '#39C758',
      },
        textBtnLogin: {
          fontWeight: 'bold',
          color: '#FFFFFF',
        },
});