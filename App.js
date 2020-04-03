import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {StatusBar} from 'react-native'

import Routes from './src/routes'

export default function multiContador() {
  return (
    <NavigationContainer>
      <StatusBar barStyle='dark-content' backgroundColor='#FFF'/>
      <Routes />
    </NavigationContainer>
  );
}
