import React from 'react-native';

const { StyleSheet, Dimensions } = React;

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  /**Start Header Styles**/
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
    /**End Header Styles**/
      textInputView: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: deviceHeight / 100,
        marginHorizontal: deviceWidth / 50,
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
        dateInput: {
          flex: 1,
        },
    /**End Header Styles**/
});
