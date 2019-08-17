import React, { useEffect, useState, useCallback } from 'react';

import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Platform,
  Dimensions
} from 'react-native';

import {
  TouchableHighlight,
  TouchableOpacity
} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import globals from '~/config/GlobalStyles';

function Header({ navigation, title }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={navigation.goBack}>
        <Icon name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>
      <Text style={globals.nomeCategoria}>{title}</Text>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 60,
    // paddingTop: 50,
    backgroundColor: '#5e2a84',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  btn: {
    height: 24,
    width: 24,
    marginLeft: 15
  }
});
