import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class Register extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style = {styles.text01}> Register </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({

    text01:{
        color:'red',
        margin:30,
        fontSize:25
    },
    container:{
        flex: 1,
        backgroundColor:"white",
        alignItems:'center',
        // justifyContent:'center'
    }

})