import * as React from 'react';
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
  Icon,
  IconButton,
  HStack,
  Divider
} from 'native-base';
import Social from '../components/socialMediaLogin'

export default function Register ({navigation}) {

 return (
      <NativeBaseProvider>
      <Box
        safeArea
        flex={1}
        p={2}
        w="90%"
        mx='auto'
      >
            <Heading textAlign="center" mt={5} size="lg" color='primary.500'>
                Register
              </Heading>

        <VStack space={2} mt={18}>
        <FormControl mt={4} >
                  <FormControl.Label   _text={{color: 'muted.700', fontSize: 'md', fontWeight: 700,}} >
                      Email  
                  </FormControl.Label>
                  <Input style={{ borderWidth:2}} size="sm"  placeholder="Enter Email Here" placeholderTextColor = "blueGray.400" />
                </FormControl>
                <FormControl mt={4} >
          <FormControl.Label  _text={{color: 'muted.700', fontSize: 'md', fontWeight: 700}}>
                      Password
                  </FormControl.Label>
                  <Input style={{ borderWidth:2}} size="sm"  placeholder="Enter Password Here" placeholderTextColor = "blueGray.400" type="password" />
          </FormControl>
          <FormControl mt={4} >
          <FormControl.Label  _text={{color: 'muted.700', fontSize: 'md', fontWeight: 700}}>
                     Confirm Password
                  </FormControl.Label>
                  <Input style={{ borderWidth:2}} size="sm"  placeholder="Confirm Password Here" placeholderTextColor = "blueGray.400" type="password" />
          </FormControl>
          <VStack  space={2}  mt={5}>
          <Button color="#00716F" _text={{color: 'white',fontWeight:'700' }}>
                    SignUp
                </Button>
                <HStack justifyContent="center"  > 
                  <Link mt={2} _text={{ color: 'cyan.500', bold: true, fontSize: 'sm' }} onPress={() => navigation.navigate("Login")}>
                   Back
                  </Link>
                </HStack>

                <Text mt={1} fontSize='sm' color='muted.700' fontWeight={700}  >or through social media </Text>

                <Social />

          </VStack>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}