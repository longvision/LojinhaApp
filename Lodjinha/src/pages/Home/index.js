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

import Banner from '~/components/Banner';
import { Container } from './styles';

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Banner />
      </Container>
    );
  }
}
