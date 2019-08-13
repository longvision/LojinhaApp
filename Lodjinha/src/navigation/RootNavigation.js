import React from 'react';
import MainDrawerNavigator from './MainDrawerNavigator';

//Navegador principal simplificado pois autenticação não está habilitada.
//Seria importante caso usuário precisasse fazer login para ver certas telas.
export default class RootNavigation extends React.Component {
  render() {
    return <MainDrawerNavigator />;
  }
}
