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
import FilteredProductsScreenNavigator from '~/navigation/routes/FilteredProductsScreenNavigator';
import DetailsScreenNavigator from '~/navigation/routes/DetailsScreenNavigator';
import { ScrollView } from 'react-native-gesture-handler';
import bg from '~/assets/Images/drawable-xxxhdpi/menu_pattern.png';

const CustomDrawerComponent = props => (
  <SafeAreaView style={{ flex: 1, backgroundColor: '#48285b' }}>
    <View style={{ height: 250 }}>
      <Image style={{ height: 250, width: '100%' }} source={bg} />
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
    }
    // FilteredProducts: {
    //   screen: FilteredProductsScreenNavigator
    // }
  },
  {
    contentComponent: CustomDrawerComponent,
    resetOnBlur: true,
    keyboardHidesTabBar: true,
    activeColor: '#fee166',
    inactiveColor: '#c4c4c4',
    barStyle: {
      backgroundColor: '#48285b'
    }
  }
);

export default createAppContainer(MainDrawerNavigator);
