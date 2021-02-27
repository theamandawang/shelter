import React, { Component } from 'react'
import { View } from 'react-native'
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import { Appbar } from 'react-native-paper'


import styles from './components/allStyles'

export default class MapScreen extends Component {

  render() {
    return (
      <View style={styles.absoluteFillView}>
        <MapView
          style={styles.absoluteFillView}
          showsUserLocation={true}
          showsCompass={true}
          region={this.props.coordinate}
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
              this.props.navigation.navigate('Home')
            }}
        />
        </Appbar.Header>
      </View>
    );
  }
}
