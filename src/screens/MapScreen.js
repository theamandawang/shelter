import React, {Component, useState, useEffect} from 'react'
import { View, Text, Platform, Alert} from 'react-native'
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







