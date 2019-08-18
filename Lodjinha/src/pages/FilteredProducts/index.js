import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import logo from '~/assets/Images/drawable-xxxhdpi/logo_navbar.png';

import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Platform,
  Dimensions
} from 'react-native';
import GeneralStatusBarColor from '~/components/GeneralStatusBarColor';
import Product from '~/components/Product';
import Header from '~/components/Header';
import { Container } from './styles';
import api from '~/services/api';
import {
  TouchableHighlight,
  TouchableOpacity
} from 'react-native-gesture-handler';

function FilteredProducts({ navigation }) {
  const category = useSelector(state => state.category.selectedCategory);
  //Estado local: gyms
  const [filtered, setFiltered] = useState([]);
  const [changePage, setChangepage] = useState(false);

  const [loading, setLoading] = useState(false);

  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(20);

  // TODO: resolver a listagem
  //Chama a api para carregar as lista de gyms

  async function load() {
    const response = await api.get(`/produto?limit=${limit}&offset=${offset}`);
    const more = response.data.data
      .map(b => ({
        ...b
      }))
      .filter(f => f.categoria.descricao == category);
    setFiltered(more);
  }

  const loadMore = useCallback(() => {
    if (limit >= 20 && limit < 80) {
      setChangepage(true);
      setLimit(limit + 20);
      setOffset(offset + 20);
    }
  }, []);

  const loadLess = useCallback(() => {
    if (limit <= 80 && limit > 20) {
      setChangepage(true);
      setLimit(limit - 20);
      setOffset(offset - 20);
    }
  }, [limit]);
  // TODO: verificar porque a showless nao funciona
  //Hook que renderiza ao mudar de página
  useEffect(() => {
    if (changePage) {
      load();
      setChangepage(false);
    }

    console.log(limit);
    console.log(offset);
  }, [changePage]);

  //Hook que renderiza ao entrar na página fazendo loading da primeira página
  useEffect(() => {
    if (filtered && filtered.constructor === Array && filtered.length === 0) {
      setLimit(limit + 20);
      setOffset(offset + 20);
      console.log(limit);
      console.log(offset);
      load();
    }

    console.log(filtered);
  }, [filtered]);

  // useEffect(() => {
  //   load();
  // }, []);

  return (
    <Container>
      <GeneralStatusBarColor
        barStyle="light-content"
        backgroundColor="#5e2a84"
      />
      <Header navigation={navigation} item={category} />
      <FlatList
        style={styles.list}
        data={filtered}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Product data={item} navigation={navigation} />
        )}
        ListFooterComponent={() => (
          //Footer View with Load More button
          <View style={styles.btns}>
            <View style={styles.footer}>
              <TouchableOpacity onPress={loadLess} style={styles.loadMoreBtn}>
                <Text style={styles.btnText}>Página Anterior</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.footer}>
              <TouchableOpacity onPress={loadMore} style={styles.loadMoreBtn}>
                <Text style={styles.btnText}>Próxima Página</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </Container>
  );
}

export default FilteredProducts;

FilteredProducts.navigationOptions = {
  title: 'FilteredPoducts',
  headerStyle: {
    backgroundColor: '#48285b',
    marginTop: 0
  },
  headerTintColor: '#fff'
};

//Estilização do componente
const styles = StyleSheet.create({
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
  },
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  loadMoreBtn: {
    padding: 10,
    backgroundColor: '#800000',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center'
  },
  btns: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 25
  }
});
