import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import * as ProductActions from '~/store/actions/product';
import { TouchableOpacity } from 'react-native-gesture-handler';

//Inicio do componente
export default function Product({ data, navigation }) {
  //Estado proveniente da Store
  const dispatch = useDispatch();
  //Navegação e disparo de ação para selecionar a atividade desejada e enviar ao reducer.
  handleNavigate = () => {
    dispatch(ProductActions.toggleProduct(data));
    console.log(data);
    navigation.navigate('Details', { navigation });
  };

  return (
    <TouchableOpacity onPress={this.handleNavigate}>
      <View key={String(data.id)} style={styles.item}>
        <Image source={{ uri: data.urlImagem }} style={styles.img} />
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <Text style={styles.nome}>{`${data.nome}: ${data.descricao.substring(
            0,
            25
          )}...`}</Text>
          <View style={styles.detalhes}>
            <Text style={styles.precoDe}>De: {data.precoDe}</Text>
            <Text style={styles.precoPor}>Por: {data.precoPor}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
//Estilização do componente
const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 100,
    paddingVertical: 25,
    marginBottom: 10
  },
  item: {
    width: 'auto',
    height: 103,
    paddingTop: 20,
    flex: 1,
    flexDirection: 'row'
  },
  nome: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20
  },
  precoDe: {
    color: '#c4c4c4',
    fontSize: 15
  },
  precoPor: {
    color: 'red',
    fontSize: 22,
    marginRight: 20
  },
  detalhes: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});
