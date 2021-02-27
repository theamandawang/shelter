import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';

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