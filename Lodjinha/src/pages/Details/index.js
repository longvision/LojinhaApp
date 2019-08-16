import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HTML from 'react-native-render-html';
import logo from '~/assets/imagens/drawable-xxxhdpi/logo_navbar.png';

import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Platform,
  ScrollView,
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
    setDetail(response.data);
    console.log(detail);
  }
  //Hook semelhante ao 'componentDidMount', para carregar as gyms
  useEffect(() => {
    loadDetails();
  }, []);

  const htmlContent = `${detail.descricao}`;
  return (
    <Container>
      <View style={styles.container}>
        <View style={styles.imageCtr}>
          <Image source={{ uri: `${detail.urlImagem}` }} style={styles.image} />
        </View>

        <Text style={styles.name}>{detail.nome}</Text>
        <View style={styles.title}>
          <Text style={styles.precoDe}>{detail.precoDe}</Text>
          <Text style={styles.precoPor}>{detail.precoPor}</Text>
        </View>
        <ScrollView style={{ flex: 1, padding: 15 }}>
          <HTML
            html={htmlContent}
            imagesMaxWidth={Dimensions.get('window').width}
          />
        </ScrollView>
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
    flex: 1,
    flexDirection: 'column'
  },
  image: {
    height: 200,
    width: 200
  },
  imageCtr: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center'
  },
  name: {
    marginLeft: 15,
    fontSize: 17,
    marginBottom: 10
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
    width: '100%',
    flexDirection: 'row',
    height: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15
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
  descricao: {
    fontSize: 17,
    padding: 15
  }
});
