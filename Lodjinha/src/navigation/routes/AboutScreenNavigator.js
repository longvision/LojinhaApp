import { createStackNavigator } from 'react-navigation';

import HomeStackNavigator from '~/navigation/routes/HomeScreenNavigator';
import About from '~/pages/About';
import Home from '~/pages/Home';
import FilteredProducts from '~/pages/FilteredProducts';
import Details from '~/pages/Details';
// import AboutScreenNavigator from '~/navigation/routes/AboutScreenNavigator';

const AboutScreenNavigator = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    About: {
      screen: About
    },
    FilteredProducts: {
      screen: FilteredProducts
    },
    Details: {
      screen: Details
    }
  },
  {
    cardStyle: { backgroundColor: '#48285b' },
    defaultNavigationOptions: {
      header: null
    }
  }
);

export default AboutScreenNavigator;
