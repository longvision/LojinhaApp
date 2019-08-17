import React, { Component } from 'react';
import {
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
  StatusBar,
  View,
  ScrollView
} from 'react-native';

import {
  TouchableHighlight,
  TouchableOpacity
} from 'react-native-gesture-handler';
// import HomeHeader from '~/components/HomeHeader';
import Banners from '~/modules/Banners';
import Categories from '~/modules/Categories';
import MaisVendidos from '~/modules/MaisVendidos';
import { Container, HeaderLogo } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

import globals from '~/config/GlobalStyles';
import logo_navbar from '~/assets/Images/drawable-xxxhdpi/logo_menu.png';
console.disableYellowBox = true;

export default function Home({ navigation }) {
  return (
    <Container>
      <View style={styles.container}>
        <TouchableOpacity style={styles.menu} onPress={navigation.openDrawer}>
          <Icon name="menu" size={24} color="#fff" />
        </TouchableOpacity>
        <Image source={logo_navbar} style={styles.logoNav} />
        <Text style={globals.logoMenu}>a Lodjinha</Text>
      </View>
      <ScrollView style={styles.scroll}>
        <Banners />
        <Categories navigation={navigation} />
        <MaisVendidos navigation={navigation} />
      </ScrollView>
    </Container>
  );
}
const styles = StyleSheet.create({
  container: {
    // height: 60,
    // marginBottom: 50,
    backgroundColor: '#5e2a84',
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  scroll: {
    // paddingBottom: 500
  },
  menu: {
    height: 24,
    width: 24,
    marginLeft: 15
  },
  logoNav: {
    height: 24,
    width: 24,
    marginHorizontal: 10
  }
});
