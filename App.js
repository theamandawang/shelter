import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AboutScreen from './src/screens/AboutScreen';
import SearchRecipesScreen from './src/screens/SearchRecipes';
import HomeScreen from './src/screens/HomeScreen';
const MainStack = createStackNavigator({
  Home: { 
    screen: HomeScreen // The main screen of the app. Has all the buttons
  },
  Recipes: {
    screen: SearchRecipesScreen
  },
  About: {
    screen: AboutScreen
  },
  initialRouteName: 'Home',
  headerMode: 'none',
});


// Disables Yellow text on the Virtual Device
console.disableYellowBox = true;
const App = new createAppContainer(MainStack);
export default App;





export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});