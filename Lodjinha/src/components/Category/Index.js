import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { format } from 'date-fns';

//Inicio do componente
export default function Category({ data }) {
  return (
    <View key={String(data.id)}>
      <Image source={{ uri: data.urlImagem }} style={styles.logo} />
      <Text>{data.descricao}</Text>
    </View>
  );
}
//Estilização do componente
const styles = StyleSheet.create({
  logo: {
    width: '100%',
    height: 120
  }
});
