import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MenuScreen from './screens/MenuScreen';
import PresentacionScreen from './screens/PresentacionScreen';
import AnalisisNumerosScreen from './screens/AnalisisNumerosScreen';
import TablaMultiplicarScreen from './screens/TablaMultiplicarScreen';

const Stack = createStackNavigator();

// Definición del componente funcional App
export default function App() {
  return (
    // Envoltura de la navegación de la aplicación con NavigationContainer
    <NavigationContainer>
      {/* Creación del stack de navegación con createStackNavigator */}
      <Stack.Navigator initialRouteName="Menu">
        {/* Definición de las rutas y componentes de cada pantalla */}
        <Stack.Screen name="Menu" component={MenuScreen} /> 
        <Stack.Screen name="Presentacion" component={PresentacionScreen} />
        <Stack.Screen name="AnalisisNumeros" component={AnalisisNumerosScreen} />
        <Stack.Screen name="TablaMultiplicar" component={TablaMultiplicarScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


//Amín Jesús Báez Espinosa 2021-0929