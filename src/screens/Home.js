import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TextInput } from 'react-native'


export default class Login extends Component {

    render() {
        const {navigate} = this.props.navigation
        return (
            <View style={styles.container}>

                <Text style = {styles.text01}> Home </Text>


            </View>



        )
    }
}

const styles = StyleSheet.create({

    text01:{
        color:'black',
        fontWeight:"700",
        marginTop:20,
        fontSize:35,
      textAlign:"center"
    },
    container:{
        backgroundColor:"#FFF",
        height:"100%",
        padding: 10,
    },



})





