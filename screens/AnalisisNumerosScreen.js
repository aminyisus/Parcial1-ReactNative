import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// Definición del componente AnalisisNumerosScreen
const AnalisisNumerosScreen = () => {
  // Definición de estados para los números ingresados y los resultados
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [num3, setNum3] = useState('');
  const [mayor, setMayor] = useState('');
  const [menor, setMenor] = useState('');
  const [promedio, setPromedio] = useState('');

  // Función para analizar los números ingresados y calcular el mayor, menor y promedio
  const analizarNumeros = () => {
    // Parseo de los números ingresados a punto flotante
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    const n3 = parseFloat(num3);

    // Creación de un array con los números ingresados
    const numeros = [n1, n2, n3];
    // Cálculo del mayor número utilizando la función Math.max
    const mayorNumero = Math.max(...numeros);
    // Cálculo del menor número utilizando la función Math.min
    const menorNumero = Math.min(...numeros);
    // Cálculo del promedio de los números
    const promedioNumeros = numeros.reduce((total, num) => total + num, 0) / numeros.length;

    // Actualización del estado de los resultados
    setMayor(mayorNumero.toString());
    setMenor(menorNumero.toString());
    setPromedio(promedioNumeros.toString());
  };

  // Renderización del componente
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Ingrese el primer número:</Text>
      <TextInput
        style={styles.input}
        value={num1}
        onChangeText={text => setNum1(text)}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Ingrese el segundo número:</Text>
      <TextInput
        style={styles.input}
        value={num2}
        onChangeText={text => setNum2(text)}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Ingrese el tercer número:</Text>
      <TextInput
        style={styles.input}
        value={num3}
        onChangeText={text => setNum3(text)}
        keyboardType="numeric"
      />
      <Button title="Analizar" onPress={analizarNumeros} />
      <Text style={styles.resultado}>Mayor: {mayor}</Text>
      <Text style={styles.resultado}>Menor: {menor}</Text>
      <Text style={styles.resultado}>Promedio: {promedio}</Text>
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
  resultado: {
    fontSize: 20,
    marginTop: 20,
  },
});

export default AnalisisNumerosScreen;
