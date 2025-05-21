import React from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function DrawerContent({ navigation }) {
  return (
    <DrawerContentScrollView>
      <DrawerItem
        label="Início"
        icon={() => <Icon name="home-outline" size={22} />}
        onPress={() => navigation.navigate('Dashboard')}
      />
      <DrawerItem
        label="Perfil"
        icon={() => <Icon name="person-outline" size={22} />}
        onPress={() => navigation.navigate('Profile')}
      />
      <DrawerItem
        label="Sair"
        icon={() => <Icon name="log-out-outline" size={22} />}
        onPress={() => {/* lógica de logout */}}
      />
    </DrawerContentScrollView>
  );
}
