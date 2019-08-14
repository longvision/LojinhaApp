import { createStackNavigator } from 'react-navigation';

import Home from '~/pages/Home';
// import Banners from '~/modules/Banners'

const HomeScreenNavigator = createStackNavigator(
  {
    Home: {
      screen: Home
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
