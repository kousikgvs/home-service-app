import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Colors from '../../utils/Colors';

const Login = () => {
  return (
    <View style={{alignItems:"center"}}>
        <Image source={{ uri: 'https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=740&t=st=1706498472~exp=1706499072~hmac=5388be9d4b1084292a1e8b2d9299809066d7d0c23eebc3950fa8aa7b750c642f' }} style={styles.loginImage} />
        <View style={styles.subContainer}>
            <Text>Hello</Text>
        </View>
    </View>
  ); 
}

export default Login;

const styles = StyleSheet.create({
    loginImage:{
        width:"70%",
        height:"40%",
        marginTop:70,
        borderWidth:4,
        borderColor:Colors.BLACK,
        borderRadius:15,
    },
    subContainer:{
        width:"100%",
        backgroundColor:Colors.PRIMARY,
        height:"70%",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        borderWidth:4,
        borderColor:Colors.BLACK,
        borderRadius:4,
     }
});
