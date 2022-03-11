import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// screen
import Home from '../screens/Home/Home';
import Daftar from '../screens/Daftar/Daftar';
import Akun from '../screens/Akun/Akun';

// tab bar icon
import Feather from 'react-native-vector-icons/Feather';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export function RenderIcon ({name, focused}) {
    return ( 
      <Feather
        name = {name}
        color = {focused ? '#0D28A6' : '#000000'}
        size = {24}
      />
    )
}

export function MainApp() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen 
        name={'Home'} 
        component={Home} 
        options={{
          tabBarIcon: ({focused}) => (
            <RenderIcon 
              name = 'home'
              focused = {focused}
            />
          )
        }}
      />
      <Tab.Screen 
        name={'Daftar Mobil'} 
        component={Daftar} 
        options={{
          tabBarIcon: ({focused}) => (
            <RenderIcon 
              name = 'list'
              focused = {focused}
            />
          )
        }}
      />
      <Tab.Screen 
        name={'Akun'} 
        component={Akun} 
        options={{
          tabBarIcon: ({focused}) => (
            <RenderIcon 
              name = 'user'
              focused = {focused}
            />
          )
        }}
      />
    </Tab.Navigator>
  );
};

const MainRouters = () => {
  return (
    <Stack.Navigator
      initialRouteName="MainApp"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={'MainApp'} component={MainApp} />
    </Stack.Navigator>
  );
};

export default MainRouters;
