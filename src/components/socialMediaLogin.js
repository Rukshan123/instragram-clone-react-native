import React, { Component } from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Text, View, TextInput, StyleSheet, Button, Alert } from 'react-native'
import {

    IconButton,
    HStack,
  } from 'native-base';

export default class Social extends Component {
    

    render() {
        return (
            <HStack justifyContent="center" alignItem='center' mt={2}>
            <IconButton
            style={{
                marginHorizontal:10,
            //     borderWidth:3,
            // borderColor:"#00716F",
            borderRadius:25,
            }}
              variant='unstyled'
              startIcon={
                <FontAwesome5 name={'facebook'} size={45} color="#1457C2" />
              }
            />
            <IconButton
            style={{
                marginHorizontal:10,
            //     borderWidth:3,
            // borderColor:"#00716F",
            borderRadius:25,
            }}
              variant='link'
              startIcon={
                <FontAwesome5 name={'google'} size={45} color="#B8232D" />
              }
            />
            <IconButton
            style={{
                marginHorizontal:10,
            //     borderWidth:3,
            // borderColor:"#00716F",
            borderRadius:25,
            }}
              variant='unstyled'
              startIcon={
                <FontAwesome5 name={'github'} size={45} color="black" />
              }
            />
            </HStack>
        );
    }
}

