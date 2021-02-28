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



	
const DATA = [
  {
    id: '0',
    title: 'Alabama',
  },
  {
    id: '1',
    title: 'Alaska',
  },
  {
    id: '2',
    title: 'Arizona',
  },
  {
    id: '3',
    title: 'Arkansas',
  },
  {
    id: '4',
    title: 'California',
  },
  {
    id: '5',
    title: 'Colorado',
  },
  {
    id: '6',
    title: 'Connecticut',
  },
  {
    id: '7',
    title: 'Delaware',
  },
  {
    id: '8',
    title: 'Florida',
  },
  {
    id: '9',
    title: 'Georgia',
  },
  {
    id: '10',
    title: 'Hawaii',
  },
  {
    id: '11',
    title: 'Idaho',
  },
  {
    id: '12',
    title: 'Illinois',
  },
  {
    id: '13',
    title: 'Indiana',
  },
  {
    id: '14',
    title: 'Iowa',
  },
  {
    id: '15',
    title: 'Kansas',
  },
  {
    id: '16',
    title: 'Kentucky',
  },
  {
    id: '17',
    title: 'Louisiana',
  },
  {
    id: '18',
    title: 'Maine',
  },
  {
    id: '19',
    title: 'Maryland',
  },
  {
    id: '20',
    title: 'Massachusetts',
  },
  {
    id: '21',
    title: 'Michigan',
  },
  {
    id: '22',
    title: 'Minnesota',
  },
  {
    id: '23',
    title: 'Mississippi',
  },
  {
    id: '24',
    title: 'Missouri',
  },
  {
    id: '25',
    title: 'Montana',
  },
  {
    id: '26',
    title: 'Nebraska',
  },
  {
    id: '27',
    title: 'Nevada',
  },
  {
    id: '28',
    title: 'New Hampshire',
  },
  {
    id: '29',
    title: 'New Jersey',
  },
  {
    id: '30',
    title: 'New Mexico',
  },
  {
    id: '31',
    title: 'New York',
  },
  {
    id: '32',
    title: 'North Carolina',
  },
  {
    id: '33',
    title: 'North Dakota',
  },
  {
    id: '34',
    title: 'Ohio',
  },
  {
    id: '35',
    title: 'Oklahoma',
  },
  {
    id: '36',
    title: 'Oregon',
  },
  {
    id: '37',
    title: 'Pennsylvania',
  },
  {
    id: '38',
    title: 'Rhode Island',
  },
  {
    id: '39',
    title: 'South Carolina',
  },
  {
    id: '40',
    title: 'South Dakota',
  },
  {
    id: '41',
    title: 'Tennessee',
  },
  {
    id: '42',
    title: 'Texas',
  },
  {
    id: '43,
    title: 'Utah',
  },
  {
    id: '44',
    title: 'Vermont',
  },
  {
    id: '45',
    title: 'Virginia',
  },
  {
    id: '46',
    title: 'Washington',
  },
  {
    id: '47',
    title: 'West Virginia',
  },
  {
    id: '48',
    title: 'Wisconsin',
  },
  {
    id: '49',
    title: 'Wyoming',
  },
];





