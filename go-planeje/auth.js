import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import auth from 'firebase/auth'

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  const handleSignUp = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        setUser(userCredential.user);
        setError('');
      })
      .catch(error => {
        setError(error.message);
      });
  };

  const handleSignIn = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        setUser(userCredential.user);
        setError('');
      })
      .catch(error => {
        setError(error.message);
      });
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
      />
      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
      />

      <Button title="Cadastrar" onPress={handleSignUp} />
      <Button title="Entrar" onPress={handleSignIn} />

      {user && <Text>Usuário logado: {user.email}</Text>}
      {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
    </View>
  );
}
