import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Vue0 from './screens/Vue0';
import Vue1 from './screens/Vue1';
import Vue2 from './screens/Vue2';
import Vue3 from './screens/Vue3';
import Vue4 from './screens/Vue4';
import Vue5 from './screens/Vue5';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Vue0" component={Vue0} />
        <Stack.Screen name="Vue1" component={Vue1} />
        <Stack.Screen name="Vue2" component={Vue2} />
        <Stack.Screen name="Vue3" component={Vue3} />
        <Stack.Screen name="Vue4" component={Vue4} />
        <Stack.Screen name="Vue5" component={Vue5} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


