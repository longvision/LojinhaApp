import { createStackNavigator } from 'react-navigation';

import Home from '~/pages/Home';
import Products from '~/pages/Products';

const HomeScreenNavigator = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    Products: {
      screen: Products
    }
  },
  {
    cardStyle: { backgroundColor: '#48285b' },
    defaultNavigationOptions: {
      header: null
    }
  }
);

export default HomeScreenNavigator;
