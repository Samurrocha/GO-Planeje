// ==============================
// /screens/DashboardScreen.js
// ==============================

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function DashboardScreen() {
  const viagens = [
    { id: 1, titulo: 'Viagem 1', descricao: 'Descrição' },
    { id: 2, titulo: 'Viagem 1', descricao: 'Descrição' },
    { id: 3, titulo: 'Viagem 3', descricao: '' }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>viagens</Text>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {viagens.map((viagem) => (
          <View key={viagem.id} style={styles.card}>
            <Text style={styles.cardTitle}>{viagem.titulo}</Text>
            {viagem.descricao !== '' && (
              <Text style={styles.cardDescription}>{viagem.descricao}</Text>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0', // cor cinza claro
    paddingTop: 60
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 20
  },
  card: {
    backgroundColor: '#4e4646', // cor cinza escuro (quase marrom)
    padding: 20,
    borderRadius: 6,
    marginBottom: 20
  },
  cardTitle: {
    fontSize: 16,
    color: '#000',
    marginBottom: 5,
    textAlign: 'center'
  },
  cardDescription: {
    fontSize: 14,
    color: '#000',
    textAlign: 'center'
  }
});
