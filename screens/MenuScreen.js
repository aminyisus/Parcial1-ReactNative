import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const MenuScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title="Presentacion"
          onPress={() => navigation.navigate('Presentacion')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Análisis de Números"
          onPress={() => navigation.navigate('AnalisisNumeros')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Tabla de Multiplicar"
          onPress={() => navigation.navigate('TablaMultiplicar')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginBottom: 10, 
  },
});

export default MenuScreen;

//Amín Jesús Báez Espinosa 2021-0929