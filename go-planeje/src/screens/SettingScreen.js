// ==============================
// /screens/SettingsScreen.js
// ==============================

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, Feather, MaterialIcons, FontAwesome5, Entypo } from '@expo/vector-icons';

export default function SettingScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      {/* Account Section */}
      <Text style={styles.sectionTitle}>Account</Text>
      <View style={styles.card}>
        <SettingItem icon={<Ionicons name="person-outline" size={20} />} label="Edit profile" />
        <SettingItem icon={<Ionicons name="shield-checkmark-outline" size={20} />} label="Security" />
        <SettingItem icon={<Ionicons name="notifications-outline" size={20} />} label="Notifications" />
        <SettingItem icon={<Feather name="lock" size={20} />} label="Privacy" />
      </View>

      {/* Support & About */}
      <Text style={styles.sectionTitle}>Support & About</Text>
      <View style={styles.card}>
        <SettingItem icon={<Ionicons name="card-outline" size={20} />} label="My Subscription" />
        <SettingItem icon={<Feather name="help-circle" size={20} />} label="Help & Support" />
        <SettingItem icon={<Ionicons name="information-circle-outline" size={20} />} label="Terms and Policies" />
      </View>

      {/* Cache & Cellular */}
      <Text style={styles.sectionTitle}>Cache & cellular</Text>
      <View style={styles.card}>
        <SettingItem icon={<MaterialIcons name="delete-outline" size={20} />} label="Free up space" />
        <SettingItem icon={<Ionicons name="speedometer-outline" size={20} />} label="Data Saver" />
      </View>

      {/* Actions */}
      <Text style={styles.sectionTitle}>Actions</Text>
      <View style={styles.card}>
        <SettingItem icon={<Feather name="flag" size={20} />} label="Report a problem" />
        <SettingItem icon={<FontAwesome5 name="user-plus" size={20} />} label="Add account" />
        <SettingItem icon={<Entypo name="log-out" size={20} />} label="Log out" />
      </View>
    </ScrollView>
  );
}

function SettingItem({ icon, label }) {
  return (
    <TouchableOpacity style={styles.item}>
      <View style={styles.icon}>{icon}</View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginVertical: 10
  },
  sectionTitle: {
    marginTop: 20,
    marginBottom: 8,
    fontWeight: '600',
    color: '#333'
  },
  card: {
    backgroundColor: '#f6f6f6',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12
  },
  icon: {
    width: 30,
    alignItems: 'center',
    marginRight: 10
  },
  label: {
    fontSize: 16,
    color: '#333'
  }
});
