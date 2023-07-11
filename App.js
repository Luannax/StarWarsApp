import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaInicial from './componentes/TelaInicial/';
import TelaTrilogia1 from './componentes/TelaTriologia1/index';
import TelaTrilogia2 from './componentes/TelaTriologia2/index';
import TelaTrilogia3 from './componentes/TelaTriologia3/index';

const Stack = createStackNavigator();

export default function App () {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="Tela Inicial" component = { TelaInicial } />
        <Stack.Screen name="Trilogia 1" component = { TelaTrilogia1 } />
        <Stack.Screen name="Trilogia 2" component = { TelaTrilogia2 } />
        <Stack.Screen name="Trilogia 3" component = { TelaTrilogia3 } />
      </Stack.Navigator>
    </NavigationContainer>
  )
}