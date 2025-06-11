import React from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { auth } from '../../firebaseConfig';
import { signOut } from 'firebase/auth';
import Icon from 'react-native-vector-icons/Ionicons';

export default function DrawerContent({ navigation }) {
  return (
    <DrawerContentScrollView>
      <DrawerItem
        label="Início"
        icon={() => <Icon name="home-outline" size={22} />}
        onPress={() => navigation.navigate('Stack', { screen: 'Dashboard'})}
      />
      <DrawerItem
        label="Perfil"
        icon={() => <Icon name="person-outline" size={22} />}
        onPress={() => navigation.navigate('Stack', { screen: 'Setting' })}
      />
      <DrawerItem
        label="Sair"
        icon={() => <Icon name="log-out-outline" size={22} />}
        onPress={() => {
          signOut(auth);
        }}
      />
    </DrawerContentScrollView>
  );
}
