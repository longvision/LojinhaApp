import { createSwitchNavigator } from 'react-navigation';

import Home from '~/pages/Home';
import About from '~/pages/About';

const AboutScreenNavigator = createSwitchNavigator(
  {
    Home: {
      screen: Home
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

export default AboutScreenNavigator;
