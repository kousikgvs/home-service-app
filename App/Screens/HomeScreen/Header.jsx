import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo';
import { Image } from 'react-native';
import Colors from '../../utils/Colors';
import { FontAwesome6 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Header = () => {
    const { user, isLoading } = useUser();
    return user && (
        <View style={styles.container}>
            {/* Profile Section */}
            <View style={styles.profileContainer}>
                <View style={styles.profileContainer}>
                    <Image source={{ uri: user?.imageUrl }} style={styles.userImage} />
                    <View>
                        <Text style={{ color: Colors.WHITE }} > Welcome </Text>
                        <Text style={{ color: Colors.WHITE, fontSize: 20 }} > {user?.fullName} </Text>
                    </View>
                </View>
                <FontAwesome6 name="bookmark" size={24} color={Colors.WHITE} />
            </View>
            {/* Search Bar section */}
            <View style={styles.searchBar}>
                <TextInput placeholder='Search Here' style={styles.textInput} />
                <Feather name="search" size={24} color={Colors.WHITE} style={styles.searchIcon} />
            </View>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 40,
        backgroundColor: Colors.PRIMARY,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    profileContainer:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        gap:10,
        justifyContent:"space-between",
    },
    userImage: {
        width: 45,
        height: 45,
        borderRadius: 99,
    },
    textInput:{
        marginTop:10,
        padding:7,
        paddingHorizontal:16,
        backgroundColor:Colors.WHITE,
        borderRadius:8,
        height:"100%",
        width:"85%",
    },
    searchBar:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        height:50,
        marginTop:10,
    },
    searchIcon:{
        marginTop:10,
        padding:7,
        color:"black",
        paddingHorizontal:16,
        backgroundColor:Colors.WHITE,
        borderRadius:8,
        width:"15%",
        height:"100%",
        position:"relative",
        right:15,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
    }

})