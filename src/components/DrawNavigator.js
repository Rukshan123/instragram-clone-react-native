import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Image,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';

import {
    NativeBaseProvider, 
  Box,
  Text,
  Button,
  HStack,
Icon
   
    } from 'native-base';
import { backgroundColor } from 'styled-system';

export default function DrawNavigator({ progress, ...props }) {
  const navigation = useNavigation(); 
    return (

        <NativeBaseProvider>

             {/* Header */}
        <HStack style={{backgroundColor:'#ffffff'}}  py={3} >
          <HStack >
          <Image style={{width:100,height:100,borderRadius:100,marginHorizontal:15}}
          source={require('../images/justin-lim-JKjBsuKpatU-unsplash.jpg')}
        />
          
          </HStack>
        </HStack>
        <Text style={{marginHorizontal:10,marginVertical:10}} color="black" fontSize={28} fontWeight='bold'>Kariyawasam Store</Text>
           
            {/* Content */}
            <DrawerContentScrollView {...props}> 
            <DrawerItemList {...props} />

            <DrawerItem onPress={() => navigation.navigate("LoginAndRegister")} style={{marginTop:70,marginLeft:15,backgroundColor:'yellow',borderWidth:2}}
            
            
            activeTintColor="red" 
            labelStyle={{color:"red",fontWeight:'700',fontSize:18,alignSelf:'center',marginLeft:22}}
            label="Log Out">

              
            </DrawerItem>
           

            
            
        
        </DrawerContentScrollView>
        </NativeBaseProvider>
       
    );
}
