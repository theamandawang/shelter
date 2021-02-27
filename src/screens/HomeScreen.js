import React, { Component } from 'react';
import { Text, Alert, Modal, View, StyleSheet, TextInput, TouchableOpacity, Image, Dimensions } from 'react-native';
//import {IconButton} from 'react-native-paper';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
export default class HomeScreen extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
    
    <View style = {styles.contentContainer}>
        {/* <TouchableOpacity
            onPress={() => {
                this.props.navigation.navigate('Recipes');
            }}
        >
            <Text style = {styles.buttonText}>Search Recipes</Text>
        </TouchableOpacity> */}
        {/* <TouchableOpacity
            onPress={() => {
                this.props.navigation.navigate('About');
            }}
        >
            <Text style = {styles.buttonText}>About</Text>
        </TouchableOpacity> */}
        <TouchableOpacity
            onPress={() => {
              this.setModalVisible(true);
            }}
          > 
          
          <Text style = {styles.buttonText}>Get Coupons</Text>
        </TouchableOpacity>
        <Modal
              visible={this.state.modalVisible}
              onRequestClose={() => {
                this.setModalVisible(false);
                }}>
              <View style = {styles.contentContainer}>
                <Text>coupons</Text>
                
              </View>
        </Modal>

        <Text style = {styles.text}>Home Screen</Text>
    </View>
    );
  }
}

const styles = StyleSheet.create({
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
      alignItems: 'center',
  },
  input: {
    width: screenWidth*0.7299,
    height: screenHeight*0.0534,
    backgroundColor: '#d3d3d3',
    borderColor: 'black',
    borderWidth: 0.5,
    borderRadius: 5,
    fontSize: screenWidth*0.0487,
    paddingHorizontal: screenWidth*0.0487,
    marginBottom: screenHeight*0.0344,
},
  text: {
      fontSize: screenWidth*0.0633,
      fontWeight: 'bold',
      marginBottom: screenHeight*0.02,
  },
  settings: {
    fontSize: screenWidth*0.0487,
    marginLeft: screenWidth*0.7786,
    top: screenHeight*0.066,
  },
  messageIcon: {
    marginLeft: screenWidth*0.15,
  },
  mapIcon: {
    marginRight: screenWidth*0.15,
  },
  buttonText: {
    fontSize: screenWidth*0.0487,
    color: 'black',
    fontWeight: 'bold',
  },
});