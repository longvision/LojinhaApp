import React from 'react';

import {
  createAppContainer,
  createDrawerNavigator,
  DrawerItems
} from 'react-navigation';

import {
  StyleSheet,
  Image,
  Text,
  View,
  SafeAreaView,
  Dimensions
} from 'react-native';

import HomeScreenNavigator from '~/navigation/routes/HomeScreenNavigator';
import Home from '~/pages/Home';
import AboutScreenNavigator from '~/navigation/routes/AboutScreenNavigator';

import { ScrollView } from 'react-native-gesture-handler';
import bg from '~/assets/Images/drawable-xxxhdpi/menu_pattern.png';

const CustomDrawerComponent = props => (
  <SafeAreaView style={{ flex: 1, backgroundColor: '#fcfcfc' }}>
    <View style={{ height: 200 }}>
      <Image style={{ height: 200, width: '100%' }} source={bg} />
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);

//3 Tabs principais da aplicação:
const MainDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreenNavigator
    },
    About: {
      screen: AboutScreenNavigator
    }
  },
  {
    drawerWidth: 350,
    cardStyle: { backgroundColor: '#fcfcfc' },
    contentComponent: CustomDrawerComponent,
    resetOnBlur: true,
    contentOptions: {
      activeTintColor: '#5e2a84'
    }
  }
);

export default createAppContainer(MainDrawerNavigator);
