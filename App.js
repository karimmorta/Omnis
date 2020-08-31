/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import RootStack from './src/navigation/RootStack';


const App = () => {
  return (
    <NavigationContainer>
      <RootStack/>
      <StatusBar hidden />
    </NavigationContainer>
  );
};

export default App;
