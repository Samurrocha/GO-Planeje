// ==============================
// /screens/RegisterScreen.js
// ==============================
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Platform } from 'react-native';
import { auth } from '../../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('');


  const handleSignUp = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user;
      setMessage('Usuário criado com sucesso!');
      setMessageColor('green');
      console.log("usuario criado");

      await signInWithEmailAndPassword(auth, email, password); // Faz login automático após o cadastro

      navigation.navigate('Dashboard'); // Redireciona para a tela de Dashboard após o cadastro
    } catch (error) {
      const erroCode = error.code;
      const erroMessage = error.message;
      setMessage(`Erro ao criar usuário`);
      setMessageColor('red');
      console.error("Erro ao criar usuário:", erroMessage, erroCode);
      throw error;
    }
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Go Planeje</Text>
      <Text style={styles.subtitle}>Crie uma conta já</Text>

      <TextInput
        style={styles.input}
        placeholder="email@domain.com"
        placeholderTextColor="#aaa"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="senha"
        placeholderTextColor="#aaa"
        onChangeText={setSenha}
        value={senha}
        secureTextEntry
      />

      {message ? <Text style={[styles.message, { color: messageColor }]}>{message}</Text> : null}

      <TouchableOpacity style={styles.loginButton} onPress={() => handleSignUp(email, senha)}>
        <Text style={styles.loginButtonText}>Cadastrar</Text>
      </TouchableOpacity>

      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>ou</Text>
        <View style={styles.line} />
      </View>

      <TouchableOpacity style={styles.authButton}>
        <AntDesign name="google" size={20} color="black" />
        <Text style={styles.authButtonText}>Continue com Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.authButton}>
        <FontAwesome name="apple" size={20} color="black" />
        <Text style={styles.authButtonText}>Continue com Apple</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.registerText}>Já tem uma conta ? Faça login</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        By clicking continue, you agree to our{' '}
        <Text style={styles.linkText}>Terms of Service</Text> and{' '}
        <Text style={styles.linkText}>Privacy Policy</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: '600', textAlign: 'center' },
  subtitle: { fontSize: 14, textAlign: 'center', color: '#444', marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    fontSize: 14
  },

  message: { textAlign: 'center', marginBottom: 10, fontSize: 14 },

  loginButton: {
    backgroundColor: '#000',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10
  },
  loginButtonText: { color: '#fff', fontWeight: 'bold' },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16
  },
  line: { flex: 1, height: 1, backgroundColor: '#ccc' },
  orText: { marginHorizontal: 10, color: '#888' },
  authButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    padding: 14,
    borderRadius: 8,
    marginBottom: 10
  },
  authButtonText: { marginLeft: 10, fontSize: 14 },
  registerText: {
    color: '#1E90FF',
    textAlign: 'center',
    marginTop: 16,
    textDecorationLine: 'underline'
  },
  footerText: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
    marginTop: 24
  },
  linkText: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    color: '#000'
  }
});
