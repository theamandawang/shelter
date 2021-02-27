import {Dimensions,StyleSheet} from 'react-native'
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height
export default StyleSheet.create({
    horizontalContainer: {
        flex: 2,
        flexDirection: 'row',
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 10,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    text: {
        marginLeft: screenWidth*0.02,
        marginRight: screenWidth*0.02,
        marginTop: screenHeight*0.02,
        fontFamily: 'Lato-Regular',
        textAlign: 'center',
        fontSize: screenWidth*0.049,
    },
    input: {
        width: screenWidth*0.73,
        height: screenHeight*0.13,
        backgroundColor: '#d5d5d5',
        borderColor: 'black',
        textAlign: 'center',
        borderWidth: 0.5,
        borderRadius: 5,
        textAlignVertical: 'top',
        fontSize: screenWidth*0.0487,
        paddingHorizontal: screenWidth*0.0487,
        marginTop: screenHeight*0.0344,
        marginBottom: screenHeight*0.0344,
    },
    title: {
        fontFamily: 'Lato-Bold',
        fontSize: screenWidth*0.0633,
        marginBottom: screenHeight*0.02,
    },
    topRightIcon: {
        marginLeft: screenWidth*0.285,
        top: screenHeight*0.057,
    },
    mainTopRightIcon: {
        marginLeft: screenWidth*0.8,
        top: screenHeight*0.057,
      },
    topLeftIcon: {
        marginRight: screenWidth*0.285,
        top: screenHeight*0.057,
    },
    button: {
        width: screenWidth*0.7299,
        height: screenHeight*0.0534,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#c80d00',
        borderColor: '#c80d00',
        borderWidth: 0.5,
        borderRadius: 5,
        resizeMode: 'contain',
        marginBottom: screenHeight*0.02,
    },
    buttonText: {
        fontSize: screenWidth*0.0487,
        fontFamily: 'Lato-Bold',
        color: 'white',
    },
    absoluteFillView: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    confirmImage: {
        marginTop: screenHeight*0.0133,
        top: screenHeight*0.01,
        height: screenHeight*0.267,
        width: screenWidth*0.487,
        alignItems: 'center',
        resizeMode: 'contain',
    },
    textContainer: {
        flex: 6,
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        alignItems: 'center',
    },
    buttonContainer: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    confirmContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    confirmTitle: {
        fontSize: screenWidth*0.0666,
        marginTop: screenHeight*0.027,
        fontFamily: 'Lato-Bold',
    },
    option: {
        fontSize: screenWidth*0.0584,
        fontFamily: 'Lato-Bold',
        top: screenHeight*0.06,
        marginTop: screenHeight*0.0267,
    },
    confirmButton: {
        width: screenWidth*0.45,
        height: screenHeight*0.05,
        top: screenHeight*0.08,
        marginLeft: screenWidth*0.0122,
        marginRight: screenWidth*0.0122,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderRadius: 5,
        backgroundColor: '#0a007e',
        borderColor: '#0a007e',
    },
    confirmButtonText: {
        fontSize: screenWidth*0.0438,
        color: 'white',
        fontFamily: 'Lato-Bold',
    },
     requestButton: {
         alignContent: 'center',
         justifyContent: 'center',
         alignItems:'center',
         bottom: screenHeight*0.2,
       },
      labelText: {
        fontFamily: 'Lato-Regular',
        textAlign: 'center',
        fontSize: screenWidth*0.049,
        position: 'relative',
      },
      logoImage: {
        height: screenHeight*0.267,
        width: screenWidth*0.487,
        bottom: screenHeight*0.035,
        marginBottom: screenHeight*0.05,
        position: 'relative',
        resizeMode: 'contain',
      },
      help: {
        width: screenWidth*0.62,
        height: screenHeight*0.0534,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'orange',
        borderWidth: 2.5,
        borderRadius: 5,
        marginBottom: screenHeight*0.0333,
      },
      admin: {
          width: screenWidth*0.62,
          height: screenHeight*0.0534,
          alignItems: 'center',
          justifyContent: 'center',
          borderColor: '#bdbdbd',
          borderWidth: 2.5,
          borderRadius: 5,
          marginBottom: screenHeight*0.0333,
      },
      messageIcon: {
        marginLeft: screenWidth*0.15,
      },
      mapIcon: {
        marginRight: screenWidth*0.15,
      },
      homeButtonText: {
        fontSize: screenWidth*0.0487,
        fontFamily: 'Lato-Bold',
        color: 'black',
      },
      emergency: {
        width: screenWidth*0.62,
        height: screenHeight*0.0534,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#c80d00',
        borderWidth: 2.5,
        borderRadius: 5,
        marginBottom: screenHeight*0.0344,
      },
      homeTitle: {
        fontFamily: 'Lato-Bold',
        fontSize: screenWidth*0.0633,
        marginBottom: screenHeight*0.04,
    },
    wrapper: {},
    keyTitle: {
        fontFamily: 'Lato-Bold',
        fontSize: screenWidth*0.0833,
    },
    smallInput: {
        width: screenWidth*0.7299,
        height: screenHeight*0.0534,
        textAlign: 'center',
        backgroundColor: '#d5d5d5',
        marginBottom: screenHeight*0.027,
        marginTop: screenHeight*0.027,
        borderColor: 'black',
        borderWidth: 0.5,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Lato-Regular',
        fontSize: screenWidth*0.0487,
        paddingHorizontal: screenWidth*0.0487,
    },
    medical: {
        width: screenWidth*0.62,
        height: screenHeight*0.0534,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#0eaffa',
        borderWidth: 2.5,
        borderRadius: 5,
        marginBottom: screenHeight*0.0333,
      },
    intruderContainer: {
        flex: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    actionSheetButtonText: {
        fontFamily: 'Lato-Bold',
        fontSize: screenWidth*0.0487,
    },
    fakeSmallInput: {
        width: screenWidth*0.7299,
        height: screenHeight*0.0534,
        backgroundColor: '#d5d5d5',
        marginBottom: screenHeight*0.027,
        borderColor: 'black',
        borderWidth: 0.5,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: 'Lato-Bold',
        fontSize: screenWidth*0.0487,
        paddingHorizontal: screenWidth*0.02,
    },
    intruderButton: {
        width: screenWidth*0.45,
        height: screenHeight*0.05,
        top: screenHeight*0.02,
        marginLeft: screenWidth*0.0122,
        marginRight: screenWidth*0.0122,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderRadius: 5,
        backgroundColor: '#c80d00',
        borderColor: '#c80d00',
    },
    intruderButtonText: {
        fontSize: screenWidth*0.04,
        color: 'white',
        fontFamily: 'Lato-Bold',
    },
    intruderInput: {
        width: screenWidth*0.73,
        height: screenHeight*0.13,
        backgroundColor: '#d5d5d5',
        textAlign: 'center',
        borderColor: 'black',
        borderWidth: 0.5,
        borderRadius: 5,
        textAlignVertical: 'top',
        fontSize: screenWidth*0.0487,
        paddingHorizontal: screenWidth*0.0487,
        marginBottom: screenHeight*0.04,
    },

})