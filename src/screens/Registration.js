import React, {Component } from 'react'
import { Text, View, StyleSheet, Image, TextInput } from 'react-native'


export default class Register extends Component {
   
    render() {

         
        const {navigate} = this.props.navigation
        return (
            <View style={styles.container}>
                <Image style = {styles.topmImg} source ={require('../images/mike-petrucci-c9FQyqIECds-unsplash.jpg')}/>               
                <Text style = {styles.text01}> Kariyawasam Store </Text>  
               
            
            <View style={{
                flexDirection:"row",
                alignItems:"center",
                marginHorizontal:22,
                borderWidth:2,
                marginTop:50,
                paddingHorizontal:10,
                borderColor:"#00716F",
                borderRadius:23,
                paddingVertical:2,
            }}>
            
          
            <TextInput
            placeholder = "Enter Email"
            placeholderTextColor = "#00716F"
          
            style={{paddingHorizontal:10,color:"black"}}
            />
               
               
            </View>

            <View style={{
                flexDirection:"row",
                alignItems:"center",
                marginHorizontal:22,
                borderWidth:2,
                marginTop:15,
                paddingHorizontal:10,
                borderColor:"#00716F",
                borderRadius:23,
                paddingVertical:2


            }}>
            
           
            <TextInput
            secureTextEntry
            placeholder = "Password"
            placeholderTextColor = "#00716F"
            
            style={{paddingHorizontal:10,color:"black"}}
            />
               
               
            </View>

            <View style={{
                flexDirection:"row",
                alignItems:"center",
                marginHorizontal:22,
                borderWidth:2,
                marginTop:15,
                paddingHorizontal:10,
                borderColor:"#00716F",
                borderRadius:23,
                paddingVertical:2


            }}>
            
           
            <TextInput
            secureTextEntry
            placeholder = "Cofirm Password"
            placeholderTextColor = "#00716F"
            style={{paddingHorizontal:10,color:"black"}}
            />
               
               
            </View>



            <View style={{
               marginHorizontal:22,
               alignItems:"center",
               justifyContent:"center",
               marginTop:30,
               backgroundColor:"#00716F",
               paddingVertical:10,
               borderRadius:23


            }}>
            
            <Text
            style={{
                fontFamily:"semibold",
                color:"white",
                fontWeight:"700"
            }}
            >Register</Text>
      
            </View>
            <Text 
            
            onPress = { () =>navigate('Login')}
            
            style={{
                fontFamily:"semibold",
                color:"#00716F",
                fontWeight:"700",
                alignSelf:"center",
                paddingVertical:25,
             }}>
             Back
            </Text>
            
            </View>

            
            
        )
    }
}

const styles = StyleSheet.create({

    text01:{
        color:'black',
        fontWeight:"700",
        marginTop:30,
        fontSize:35,
      textAlign:"center"
    },
    container:{
        backgroundColor:"#FFF",
        height:"100%",
        padding: 10,
    },

   topmImg:{
    borderRadius: 20,
    width:"100%",
    height:"30%",

   }

})