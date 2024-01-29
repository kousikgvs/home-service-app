import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Colors from '../../utils/Colors';

const Login = () => {
  return (
    <View style={{alignItems:"center"}}>
        <Image source={{ uri: 'https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=740&t=st=1706498472~exp=1706499072~hmac=5388be9d4b1084292a1e8b2d9299809066d7d0c23eebc3950fa8aa7b750c642f' }} style={styles.loginImage} />
        <View style={styles.subContainer}>
            <Text style={{fontSize:25 , color:Colors.WHITE  , textAlign:"center"}}
            >Lets Find {""}
            <Text style={{fontWeight:"bold"}}>Professional cleaning and Repair Services</Text>
            </Text>
            <Text style={{fontSize:16 , color:Colors.WHITE , textAlign:"center" , marginTop:20}}>Best App to find services near you which deliver you a Professional service</Text>
            <TouchableOpacity style={styles.button} onPress={() => console.log("pressed the Button")}>
                <Text style={{textAlign:"center" , color:Colors.PRIMARY}}>Let's get Started</Text>
            </TouchableOpacity>
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
        padding:20,
     },
     button:{
        padding:15,
        backgroundColor:Colors.WHITE,
        borderRadius:99,
        marginTop:30,
     }
});
