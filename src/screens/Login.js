import * as React  from 'react'
import {  StyleSheet, Image } from 'react-native'

import Social from '../components/socialMediaLogin'

import {
    NativeBaseProvider,
    Box,
    Text,
    Heading,
    VStack,
    FormControl,
    Input,
    Link,
    Button,
    HStack,
  } from 'native-base';
import { TextInput } from 'react-native-gesture-handler';

export default function Login ({navigation}) {






        return (

            <NativeBaseProvider>
            <Box
              safeArea
              flex={1}
              p={1}
              w="92%"
              mx='auto'
            >
               
                <Image
          style={{
              width:"100%",
              height:"22%"
            }}
          source={require('../images/justin-lim-JKjBsuKpatU-unsplash.jpg')}
        />
                
                

              <Heading textAlign="center" mt={4} fontSize={30} color='primary.500'>
                Kariyawasam Store
              </Heading>
              
      
              <VStack space={2} mt={5}>
                <FormControl >
                  <FormControl.Label   _text={{color: 'muted.700', fontSize: 'md', fontWeight: 700,}} >
                      Email  
                  </FormControl.Label>
                  <Input style={{ borderWidth:2}} size="sm"  placeholder="Enter Email Here" placeholderTextColor = "blueGray.400" />
                </FormControl>
                <FormControl mb={5}>
                  <FormControl.Label  _text={{color: 'muted.700', fontSize: 'md', fontWeight: 700}}>
                      Password
                  </FormControl.Label>
                  <Input style={{ borderWidth:2}} size="sm"  placeholder="Enter Password Here" placeholderTextColor = "blueGray.400" type="password" />
                  <Link
                    _text={{ fontSize: 'xs', fontWeight: '700', color:'cyan.500' }}
                    alignSelf="flex-end"
                    mt={1}
                  >
                    Forget Password?
                  </Link>
                </FormControl>
                <VStack  space={2}>
                <Button color="#00716F" _text={{color: 'white',fontWeight:'700' }}>
                    Login
                </Button>

                <HStack justifyContent="center"  > 
                  <Link mt={2} _text={{ color: 'cyan.500', bold: true, fontSize: 'sm' }} onPress={() => navigation.navigate("Register")}>
                    Create new account
                  </Link>
                </HStack>

                <Text mt={2} fontSize='sm' color='muted.700' fontWeight={700}  >or through social media </Text>

                     <Social/>
      
                </VStack>
                
              </VStack>
            </Box>
          </NativeBaseProvider>


        )

}



 const styles = StyleSheet.create({

     

 })
