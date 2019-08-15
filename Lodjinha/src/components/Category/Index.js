import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { format } from 'date-fns';

//Inicio do componente
export default function Category({ data }) {
  return (
    <View key={String(data.id)} style={styles.item}>
      <Image source={{ uri: data.urlImagem }} style={styles.img} />
      <Text style={styles.description}>{data.descricao}</Text>
    </View>
  );
}
//Estilização do componente
const styles = StyleSheet.create({
  img: {
    width: '90%',
    height: '90%'
  },
  item: {
    width: 100,
    height: 100,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    marginTop: 30
  },
  description: {
    marginTop: 5,
    marginBottom: 30
  }
});
