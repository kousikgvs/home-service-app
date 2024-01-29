import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import * as WebBrowser from "expo-web-browser";
import Colors from '../../utils/Colors';
import { useWarmUpBrowser } from "../../../hooks/warmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";

WebBrowser.maybeCompleteAuthSession();

const Login = () => {
    useWarmUpBrowser();
    
    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
    const onPress = React.useCallback(async () => {
        try {
          const { createdSessionId, signIn, signUp, setActive } =
            await startOAuthFlow();
     
          if (createdSessionId) {
            setActive({ session: createdSessionId });
          } else {
            // Use signIn or signUp for next steps such as MFA
          }
        } catch (err) {
          console.error("OAuth error", err);
        }
      }, []);

  return ( 
    <View style={{alignItems:"center"}}>
        <Image source={{ uri: 'https://img.freepik.com/free-vector/cleaners-with-cleaning-products-housekeeping-service_18591-52068.jpg?w=740&t=st=1706511126~exp=1706511726~hmac=5b6aad39393974c1de425c3dbec4c31bfabdfd5ccd505067f1a05d5cbe2413ba' }} style={styles.loginImage} />
        <View style={styles.subContainer}>
            <Text style={{fontSize:25 , color:Colors.WHITE  , textAlign:"center"}}
            >Lets Find {""}
            <Text style={{fontWeight:"bold"}}>Professional cleaning and Repair Services</Text>
            </Text>
            <Text style={{fontSize:16 , color:Colors.WHITE , textAlign:"center" , marginTop:20}}>Best App to find services near you which deliver you a Professional service</Text>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={{textAlign:"center" , color:Colors.PRIMARY}}>Let's get Started</Text>
            </TouchableOpacity>
        </View> 
    </View>
  ); 
}

export default Login;

const styles = StyleSheet.create({
    loginImage:{
        width:"90%",
        height:"40%",
        marginTop:80,
        marginBottom:10,
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
