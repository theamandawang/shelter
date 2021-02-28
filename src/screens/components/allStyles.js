import {Dimensions,StyleSheet, StatusBar} from 'react-native'
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
        backgroundColor: '#ccd9cd',
        
    },
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
      },
      item: {
        backgroundColor: '#f9c2ff',
        padding: 12,
        marginVertical: 6,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 16,
      },
    text: {
        marginLeft: screenWidth*0.02,
        marginRight: screenWidth*0.02,
        marginTop: screenHeight*0.02,
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
        color: 'white',
    },
    absoluteFillView: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    option: {
        fontSize: screenWidth*0.0584,
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
    },
     requestButton: {
         alignContent: 'center',
         justifyContent: 'center',
         alignItems:'center',
         bottom: screenHeight*0.2,
       },
      logoImage: {
        height: screenHeight*0.2,
        width: screenWidth*0.25,
        bottom: screenHeight*0.035,
        marginTop: screenHeight*0.01,
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
      mapIcon: {
        justifyContent: 'center',
    },
      homeButtonText: {
        fontSize: screenWidth*0.0487,
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
        fontFamily: 'serif',
        fontSize: screenWidth*0.12,
        marginBottom: screenHeight*0.05,
        //marginTop: screenHeight*0.1,
        color: '#f5f5f5',
    },
    homeText: {
        fontSize: screenWidth*0.05,
        textAlign: 'center',
        marginLeft: screenWidth*0.10,
        marginRight: screenWidth*0.10,
        marginBottom: screenHeight*0.05,
        color: '#f5f5f5',
    },
    wrapper: {},
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
        fontSize: screenWidth*0.0487,
        paddingHorizontal: screenWidth*0.0487,
    },
})