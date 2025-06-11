import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './DrawerContent';
import StackNavigator from './StackNavigator';

const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  return (
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Stack" component={StackNavigator} options={{ headerShown: true,title:false }} />
      </Drawer.Navigator>
  );
}
