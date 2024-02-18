import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// Definición del componente TablaMultiplicarScreen
const TablaMultiplicarScreen = () => {
  // Definición de estados para el número ingresado y la tabla de multiplicar generada
  const [numero, setNumero] = useState('');
  const [tabla, setTabla] = useState([]);

  // Función para generar la tabla de multiplicar
  const generarTabla = () => {
    const num = parseInt(numero); // Parseo del número ingresado a entero
    const tablaMultiplicar = []; // Inicialización de un array para almacenar la tabla de multiplicar

    // Verificación de que el número ingresado sea válido
    if (!isNaN(num)) {
      // Generación de la tabla de multiplicar para el número ingresado
      for (let i = 1; i <= 13; i++) {
        tablaMultiplicar.push(`${num} x ${i} = ${num * i}`); // Agrega cada fila de la tabla al array
      }
      setTabla(tablaMultiplicar); // Actualiza el estado con la tabla de multiplicar generada
    }
  };

  // Renderización del componente
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Ingrese un número:</Text>
      <TextInput
        style={styles.input}
        value={numero}
        onChangeText={text => setNumero(text)}
        keyboardType="numeric"
      />
      <Button title="Generar tabla de multiplicar" onPress={generarTabla} />
      <Text style={styles.tituloTabla}>Tabla de multiplicar de {numero}:</Text>
      <View>
        {/* Renderiza cada elemento de la tabla de multiplicar */}
        {tabla.map((item, index) => (
          <Text key={index} style={styles.itemTabla}>{item}</Text>
        ))}
      </View>
    </View>
  );
};

// Estilos del componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    width: '30%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  tituloTabla: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  itemTabla: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default TablaMultiplicarScreen;

// Información del autor
// Amín Jesús Báez Espinosa 2021-0929
