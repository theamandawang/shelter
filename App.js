import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
//import { PermissionsAndroid } from 'react-native';


const MainStack = createStackNavigator({
  Home: { 
    screen: HomeScreen // The main screen of the app. Has all the buttons
  },
  initialRouteName: 'Home',
  headerMode: 'none',
});


// Disables Yellow text on the Virtual Device
console.disableYellowBox = true;
const App = new createAppContainer(MainStack);
export default App;



//location permission 
//export async function requestLocationPermission() 
//{
  //try {
    //const granted = await PermissionsAndroid.request(
      //PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION)
    //if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      //console.log("You can use the location")
      //alert("You can use the location");
    //} else {
      //console.log("location permission denied")
      //alert("Location permission denied");
    //}
  //} catch (err) {
    //console.warn(err)
  //}
//}
