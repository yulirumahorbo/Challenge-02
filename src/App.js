import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainRouters from './routers/MainRouters';

export default function App() {
  return (
    <NavigationContainer>
      <MainRouters />
    </NavigationContainer>
  );
}
