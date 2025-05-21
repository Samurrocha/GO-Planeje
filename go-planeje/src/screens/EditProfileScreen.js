// ==============================
// /screens/EditProfileScreen.js
// ==============================
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function EditProfileScreen() {
  const [name, setName] = useState('Melissa Peters');
  const [email, setEmail] = useState('melpeters@gmail.com');
  const [dob, setDob] = useState('23/06/1995');
  const [country, setCountry] = useState('Nigeria');

  const handleSave = () => {
    // Salvar no Firestore futuramente
    alert('Alterações salvas!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Perfil</Text>
      <TextInput placeholder="Nome" value={name} onChangeText={setName} style={styles.input} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} />
      <TextInput placeholder="Data de Nascimento" value={dob} onChangeText={setDob} style={styles.input} />
      <TextInput placeholder="País" value={country} onChangeText={setCountry} style={styles.input} />
      <Button title="Salvar alterações" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
  input: { borderBottomWidth: 1, marginBottom: 15, padding: 8 }
});