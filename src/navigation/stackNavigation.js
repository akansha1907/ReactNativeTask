// App.js
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SPLASH, TABS} from '../utils/constants';
import HomeScreen from '../screens/HomeScreen';
import Tabs from './tabs';

const Stack = createStackNavigator();

const StackNvigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={SPLASH} component={HomeScreen} />
        <Stack.Screen name={TABS} component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNvigator;
