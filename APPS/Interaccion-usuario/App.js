import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  Alert,
} from "react-native";
import styles from "./styles/formStyles"; 

export default function App() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [password, setPassword] = useState("");

  const limpiarCampos = () => {
    setNombre("");
    setCorreo("");
    setFechaNacimiento("");
    setPassword("");
  };

  const handleRegister = () => {
    if (!nombre || !correo || !fechaNacimiento || !password) {
      Alert.alert("Campos incompletos", "Por favor rellena todos los campos.");
    } else {
      Alert.alert("Registro exitoso", `¡Bienvenido, ${nombre}!`);
      limpiarCampos();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />

      <TextInput
        style={styles.input}
        placeholder="Correo"
        value={correo}
        onChangeText={setCorreo}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Fecha de nacimiento"
        value={fechaNacimiento}
        onChangeText={setFechaNacimiento}
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>

      <View style={styles.secondary}>
        <Button title="Limpiar" onPress={limpiarCampos} />
      </View>
    </View>
  );
}
