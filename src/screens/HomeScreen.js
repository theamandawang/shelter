import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, Dimensions, Linking } from 'react-native'
import { IconButton } from 'react-native-paper'
//import * as Permissions from 'expo-permissions'
//import * as Font from 'expo-font'
const screenWidth = Dimensions.get('window').width
import styles from './components/allStyles'

export default class HomeScreen extends Component {
  constructor(props) {
	  super();
      this.state = {
        assetsLoaded: false,
      }
  }
  
 // async componentDidMount(){
    // await Font.loadAsync({
    //   'Lato-Bold': require('../../assets/fonts/Lato-Bold.ttf'),
    //   'Lato-Regular' : require('../../assets/fonts/Lato-Regular.ttf'),
    // })
    // this.setState({ assetsLoaded: true })
 // }
  render() {

    return (

      <View style={styles.contentContainer}>

        <View style = {styles.container}>
          <Text styles={styles.homeTitle}>Home</Text>

        <View style = {styles.container}>
          <IconButton style = {styles.mapIcon}
            icon = 'google-maps'
            color = 'green'
            size={screenWidth*0.18}
            onPress={() => {
              this.props.navigation.navigate('Map')
            }}
          />
      </View>
    </View>
    </View>
    );
  }
}
