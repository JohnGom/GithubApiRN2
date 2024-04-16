import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  viewTop: {
    height: deviceWidth / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  viewContainer: {
    backgroundColor: '#f1f1f1',
  },
  iconLogo: {
    fontSize: deviceWidth / 5,
    color: 'white',
  },
  viewFormContain: {
    flex: 0,
    backgroundColor: 'black',
  },
  viewForm: {
    flex: 1,
    padding: 25,
    alignItems: 'center',
    borderTopLeftRadius: deviceWidth / 6,
    overflow: 'hidden',
    backgroundColor: '#f1f1f1',
  },
  textTitle: {
    fontSize: 30,
    marginVertical: 25,
    color: 'black',
  },
      textInputView: {
        flex: 0,
        flexDirection: 'row',
        width: deviceWidth - 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: deviceHeight / 100,
        paddingHorizontal: deviceWidth / 50,
        borderWidth: 0.5,
        borderColor: '#25292E20',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: 'white',
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
        flex: 1,
        marginVertical: deviceHeight / 20,
        width: deviceWidth - 50,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: 'black',
      },
        textBtnLogin: {
          color: '#FFFFFF',
        },
});