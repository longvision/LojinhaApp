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

function Categories({ navigation }) {
  //Estado local: gyms
  const [categories, setCategories] = useState();

  // console.log(categories);
  //Hook semelhante ao 'componentDidMount', para carregar as gyms
  useEffect(() => {
    //Chama a api para carregar as lista de gyms
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
      <View style={styles.title}>
        <Text style={styles.text}>Categorias</Text>
      </View>
      <FlatList
        data={categories}
        horizontal={true}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Category data={item} navigation={navigation} />
        )}
      />
    </View>
  );
}

export default Categories;

//Estilização do componente
const styles = StyleSheet.create({
  container: {
    height: 180
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
    width: '100%'
  },
  text: {
    fontSize: 17,
    paddingLeft: 7,
    paddingTop: 10,
    paddingBottom: 10
  }
});
