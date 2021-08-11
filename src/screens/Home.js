import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import DefaultHome from '../components/DefaultHome';
import Customer from '../components/Customer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Item from '../components/Item';
import PlaceOrder from '../components/PlaceOrder';
import DrawNavigator from '../components/DrawNavigator';


const Drawer = createDrawerNavigator();

export default function Home() {
    return (
      <Drawer.Navigator drawerContent={props => <DrawNavigator {...props} />}
        initialRouteName="Home">
      <Drawer.Screen 
        options={{
          drawerIcon: ({ color }) => (
            <FontAwesome5 name={'home'} size={30} color={color} />
          ),
        }}
      name="Home" component={DefaultHome} />


      <Drawer.Screen 
      options={{
        drawerIcon: ({ color }) => (
          <FontAwesome5 name={'user-plus'} size={30} color={color} />
        ),
      }}
      
      name="Managed Customers" component={Customer} />


      <Drawer.Screen 
      options={{
        drawerIcon: ({ color }) => (
          <FontAwesome5 name={'marker'} size={30} color={color} />
        ),
      }}
      
      name="Managed Items" component={Item} />


      <Drawer.Screen 
      options={{
        drawerIcon: ({ color }) => (
          <FontAwesome5 name={'money-check-alt'} size={30} color={color} />
        ),
      }}
      
      name="Placed Order" component={PlaceOrder} />

      





    </Drawer.Navigator>





      
        
    )
}
