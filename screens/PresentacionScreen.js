import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// Definición del componente PresentacionScreen
const PresentacionScreen = () => {
  // Definición de variables para la imagen de perfil y la información personal
  const profileImage = require('../assets/profile_photo.jpg'); // Importa la imagen de perfil desde la ruta especificada
  const nombre = "Amín Jesús"; // Define el nombre
  const apellido = "Báez Espinosa"; // Define el apellido
  const correoElectronico = "20210929@itla.edu.do"; // Define el correo electrónico

  // Renderización del componente
  return (
    <View style={styles.container}>
      <Image source={profileImage} style={styles.profileImage} /> {/* Muestra la imagen de perfil */}
      <Text style={styles.text}>Nombre: {nombre}</Text> {/* Muestra el nombre */}
      <Text style={styles.text}>Apellido: {apellido}</Text> {/* Muestra el apellido */}
      <Text style={styles.text}>Correo Electrónico: {correoElectronico}</Text> {/* Muestra el correo electrónico */}
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
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 30,
  },
  text: {
    fontSize: 25,
    marginBottom: 10,
  },
});

export default PresentacionScreen;

// Información del autor
// Amín Jesús Báez Espinosa 2021-0929
