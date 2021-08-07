import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Login ({navigation}) {






        return (
            <View style={styles.container}>
                <Image style={styles.topmImg} source={require('../images/mike-petrucci-c9FQyqIECds-unsplash.jpg')} />
                <Text style={styles.text01}> Kariyawasam Store </Text>


                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginHorizontal: 22,
                    borderWidth: 2,
                    marginTop: 30,
                    paddingHorizontal: 10,
                    borderColor: "#00716F",
                    borderRadius: 23,
                    paddingVertical: 2,
                }}>

                    <FontAwesome5 name={'envelope-square'} size={25} color="#00716F" />
                    <TextInput
                        placeholder="Enter Email Here"

                        style={{ paddingHorizontal: 10, color: "black" }}
                    />


                </View>

                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginHorizontal: 22,
                    borderWidth: 2,
                    marginTop: 15,
                    paddingHorizontal: 10,
                    borderColor: "#00716F",
                    borderRadius: 23,
                    paddingVertical: 2


                }}>

                    <FontAwesome5 name={'lock'} size={25} color="#00716F" />
                    <TextInput
                        secureTextEntry
                        placeholder="Enter Password Here"

                        style={{ paddingHorizontal: 10, color: "black" }}
                    />


                </View>


                <View
                    style={{
                        marginHorizontal: 22,
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: 30,
                        backgroundColor: "#00716F",
                        paddingVertical: 12,
                        borderRadius: 23


                    }}>

                    <Text
                        style={{
                            fontFamily: "semibold",
                            color: "white",
                            fontWeight: "700"
                        }}
                    >Login</Text>

                </View>

                <Text

                    onPress={() => navigation.navigate("Register")}

                    style={{
                        fontFamily: "semibold",
                        color: "#00716F",
                        fontWeight: "700",
                        alignSelf: "center",
                        paddingVertical: 25,
                    }}>
                    Sign Up
                </Text>

                <Text



                    style={{
                        fontSize: 16,
                        fontFamily: "semibold",
                        color: "black",
                        fontWeight: "700",
                        alignSelf: "center",
                        paddingVertical: 5,
                    }}>
                    or through social media
                </Text>


            </View>



        )

}

const styles = StyleSheet.create({

    text01: {
        color: 'black',
        fontWeight: "700",
        marginTop: 20,
        fontSize: 35,
        textAlign: "center"
    },
    container: {
        backgroundColor: "#FFF",
        height: "100%",
        padding: 10,
    },

    topmImg: {
        borderRadius: 20,
        width: "100%",
        height: "30%",

    }

})
