import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ListScreen from './src/screens/ListScreen'
import MapScreen from './src/screens/MapScreen'


const MainStack = createStackNavigator({
  Home: { 
    screen: HomeScreen // The main screen of the app. Has all the buttons
  },
  Map: {
    screen: MapScreen
  },
  List: {
    screen: ListScreen
  }

}, {
  initialRouteName: 'Home',
  headerMode: 'none',
})





// Disables Yellow text on the Virtual Device
console.disableYellowBox = true;
const App = new createAppContainer(MainStack);
export default App;