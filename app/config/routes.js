import { StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import Register from '../screens/Register';
import Categories from '../screens/Categories'
import Previews from '../screens/Previews'
const HomeStack = StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null
      },
    },
    Register: {
      screen: Register,
      navigationOptions: {
        headerTitle: 'Pet owner details',
      },
    },
    Categories: {
      screen: Categories,
      navigationOptions: {
        header: () => null,
      },
    },
    Previews : {
      screen : Previews,
      navigationOptions : {
        header: () => null,
      },
    },
  }
);

export default StackNavigator(
  {
    Home: {
      screen: HomeStack,
    }
  },
  {
    mode: 'modal',
    cardStyle: { paddingTop: StatusBar.currentHeight },
    headerMode: 'none'
  },
);
