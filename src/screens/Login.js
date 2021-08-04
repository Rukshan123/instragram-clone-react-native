import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style = {styles.topmImg} source ={require('../images/mike-petrucci-c9FQyqIECds-unsplash.jpg')}/>
                
                <Text style = {styles.text01}> Kariyawasam Store </Text>

                
            </View>
            
        )
    }
}

const styles = StyleSheet.create({

    text01:{
        color:'black',
        fontWeight:"700",
        margin:30,
        fontSize:30
    },
    container:{
        padding:10,
        flex: 1,
        backgroundColor:"#FFF",
        height:"100%",
        alignItems:'center',
        
        // justifyContent:'center'
    },

   topmImg:{
    borderRadius: 20,
    width:"100%",
    height:"30%"

   }

})