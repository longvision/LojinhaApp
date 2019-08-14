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
import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <Banners />
    </Container>
  );
}
