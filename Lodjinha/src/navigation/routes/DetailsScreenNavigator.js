import { createStackNavigator } from 'react-navigation';

import Home from '~/pages/Home';
import FilteredProducts from '~/pages/FilteredProducts';
import Details from '~/pages/Details';
import About from '~/pages/About';
const DetailsScreenNavigator = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    FilteredProducts: {
      screen: FilteredProducts
    },
    Details: {
      screen: Details
    },
    About: {
      screen: About
    }
  },
  {
    cardStyle: { backgroundColor: '#48285b' },
    defaultNavigationOptions: {
      header: null
    }
  }
);

export default DetailsScreenNavigator;
