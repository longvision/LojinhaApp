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
import api from '~/services/api';

function Products() {
  const category = useSelector(state => state.category.selectedCategory);
  //Estado local: gyms
  const [filtered, setFiltered] = useState();
  const [list, setList] = useState([]);

  //Chama a api para carregar as lista de gyms

  async function loadProducts() {
    const response = await api.get('/produto/');
    const selectedItem = response.data.data
      .map(b => ({
        ...b
      }))
      .filter(f => f.categoria.descricao == category);
    setFiltered(selectedItem);
  }
  //Hook semelhante ao 'componentDidMount', para carregar as gyms
  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.text}>Produtos</Text>
      </View>
      <FlatList
        style={styles.list}
        data={filtered}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <Product data={item} />}
      />
    </View>
  );
}

export default Products;

Products.navigationOptions = {
  title: 'Products',
  headerStyle: {
    backgroundColor: '#48285b',
    marginTop: 0
  },
  headerTintColor: '#fff'
};

//Estilização do componente
const styles = StyleSheet.create({
  container: {
    height: 450
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
