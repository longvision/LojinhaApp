import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import logo from '~/assets/imagens/drawable-xxxhdpi/logo_navbar.png';

import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Platform,
  Dimensions
} from 'react-native';

import Product from '~/components/Product';
import { Container } from './styles';
import api from '~/services/api';

function Details({ navigation }) {
  const productId = useSelector(state => state.product.selectedProduct.id);
  //Estado local: gyms
  const [detail, setDetail] = useState([]);

  //Chama a api para carregar as lista de gyms

  async function loadDetails() {
    const response = await api.get(`/produto/${productId}`);
    setDetail(response);
  }
  //Hook semelhante ao 'componentDidMount', para carregar as gyms
  useEffect(() => {
    loadDetails();
  }, []);

  return (
    <Container>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.text}>Detalhes</Text>
        </View>
        <View>
          <Text>{detail.nome}</Text>
          <Text>{detail.precoDe}</Text>
          <Text>{detail.precoPor}</Text>
          <Text>{detail.descricao}</Text>
        </View>
      </View>
    </Container>
  );
}

export default Details;

Details.navigationOptions = {
  title: 'Details',
  headerStyle: {
    backgroundColor: '#48285b',
    marginTop: 0
  },
  headerTintColor: '#fff'
};

//Estilização do componente
const styles = StyleSheet.create({
  container: {
    height: 'auto',
    paddingTop: 50
  },
  list: {
    marginTop: 2
  },
  ban: {
    flex: 1,
    flexDirection: 'column'
  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#c4c4c4',
    borderTopWidth: 1,
    borderTopColor: '#c4c4c4',
    width: '100%'
  },
  text: {
    fontSize: 17,
    paddingLeft: 7,
    paddingTop: 10,
    paddingBottom: 10
  }
});
