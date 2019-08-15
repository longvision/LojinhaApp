import React, { useEffect, useState, useCallback } from 'react';

import logo from '~/assets/imagens/drawable-xxxhdpi/logo_navbar.png';

import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Platform,
  Dimensions
} from 'react-native';

import Category from '~/components/Category';
import api from '~/services/api';

function Categories() {
  //Estado local: gyms
  const [categories, setCategories] = useState();
  //Estilo dos banners
  const BannerWidth = Dimensions.get('window').width;
  const BannerHeight = 260;
  //Chama a api para carregar as lista de gyms

  //Hook semelhante ao 'componentDidMount', para carregar as gyms
  useEffect(() => {
    async function loadCategories() {
      const response = await api.get('/categoria/');
      const data = response.data.data.map(b => ({
        ...b
      }));
      setCategories(data);
    }
    loadCategories();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Categorias</Text>
      <FlatList
        style={styles.lista}
        data={categories}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <Category item={item} />}
      />
    </View>
  );
}

export default Categories;

//Estilização do componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: Platform.OS === 'ios' ? 34 : 0
  },
  list: {
    marginTop: 15
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
    marginTop: 30
  }
});
