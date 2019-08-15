import React, { Component } from 'react';
import {
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
  StatusBar,
  View
} from 'react-native';

import Banners from '~/modules/Banners';
import Categories from '~/modules/Categories';
import MaisVendidos from '~/modules/MaisVendidos';
import { Container } from './styles';

export default function Home({ navigation }) {
  return (
    <Container>
      <Banners />
      <Categories navigation={navigation} />
      <MaisVendidos />
    </Container>
  );
}
