import React, {Component, useState, useEffect} from 'react'
import { View, Text, Platform, Alert, Linking} from 'react-native'
import * as Location from 'expo-location';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps'
import { Appbar } from 'react-native-paper'
import styles from './components/allStyles'

export default function MapScreen({navigation}) {
  var latitude = ''
  var longitude = ''
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync()
      console.log(status)
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied')
        return
      }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
    })();
}, []);

let text = 'Waiting..';
if (errorMsg) {
  text = errorMsg;
} else if (location) {
  text = JSON.stringify(location)

  latitude = location.coords.latitude
  longitude = location.coords.longitude
  console.log(latitude)
  console.log(longitude)

} 

const alert = () =>
    Alert.alert(
      'Waiting for location',
      'Waiting!',
      [
        {
          text: "Cancel",
          onPress: () => console.log(),
          style: "cancel"
        },
      ],
      { cancelable: false }
    );



    if(latitude !== ''){
      return (
        <View style={styles.absoluteFillView}>
          <MapView
            style={styles.absoluteFillView}
            showsUserLocation={true}
            showsCompass={true}
            initialRegion={{
              latitude: latitude,
              longitude: longitude,
              latitudeDelta: 0.022,
              longitudeDelta: 0.022,
            }}
            showsUserLocation={true}
            provider = {PROVIDER_GOOGLE}
          >

              <MapView.Marker 
                key = {0}
                title= {'The Bartlett House'}
                description= {'1110 University Ave, Morgantown, WV 26505\nPhone: (304) 292-0101'}
                coordinate={{
                  latitude: 39.629150,
                  longitude: -79.958610
                }}
                onPress={() =>Linking.openURL('https://www.bartletthousingsolutions.org/')}
                pinColor={'#ff0000'}
              />
              <MapView.Marker 
                key = {1}
                title= {'The United Way'}
                description= {'278 Spruce St, Morgantown, WV 26505\nPhone: (304) 296-7525'}
                coordinate={{
                  latitude: 39.629080,
                  longitude: -79.955010
                }}
                onPress={() =>Linking.openURL('https://www.unitedwaympc.org/')}
                pinColor={'#ff0000'}
              />
              <MapView.Marker 
                key = {2}
                title= {'Compass Women\'s Center'}
                description= {'283 Don Knotts Blvd, Morgantown, WV 26501\nPhone: (304) 212-2131'}
                coordinate={{
                  latitude: 39.615050,
                  longitude: -79.970210
                }}
                onPress={() =>Linking.openURL('https://compass4women.org/resources/')}
                pinColor={'#ff0000'}
              />
          </MapView>

          
          <Appbar.Header
            dark = {true}
            style={{backgroundColor:'#bdbdbd'}}
          >
          <Appbar.Action 
            icon = 'arrow-left'
            size = {18}
              onPress={() =>{
                navigation.navigate('Home')
              }}
          />
          </Appbar.Header>
        </View>
      );
    }
    else{
      alert()
        return (

        <View>
          <Appbar.Header
            dark = {true}
            style={{backgroundColor:'#bdbdbd'}}
          >
          <Appbar.Action 
            icon = 'arrow-left'
            size = {18}
              onPress={() =>{
                navigation.navigate('Home')
              }}
          />
          </Appbar.Header>
        </View>
      );
    }
}







