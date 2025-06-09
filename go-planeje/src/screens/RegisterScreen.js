
// ==============================
// /screens/RegisterScreen.js
// ==============================
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { firebase } from '../../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSignUp = () => {
    
    // auth()
    //   .createUserWithEmailAndPassword(email, password)
    //   .then(userCredential => {
    //     setUser(userCredential.user);
    //     setError('');
    //   })
    //   .catch(error => {
    //     setError(error.message);
    //   });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <TextInput placeholder="Email" style={styles.input} onChangeText={setEmail} value={email} />
      <TextInput placeholder="Senha" style={styles.input} secureTextEntry onChangeText={setSenha} value={senha} />
      <Button title="Cadastrar" onPress={handleSignUp} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 32, marginBottom: 20, textAlign: 'center' },
  input: { borderBottomWidth: 1, marginBottom: 15, padding: 8 }
});