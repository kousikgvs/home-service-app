import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import GlobalApi from '../../utils/GlobalApi'
import { useEffect } from 'react'
import { Image } from 'react-native'
import Colors from '../../utils/Colors'

const Categories = () => {
    const [categories , setCategories] = useState([]);
    const getCategories = () => {
        GlobalApi.getCategeories().then(res => {
            console.log("response" , res.categories);
            setCategories(res?.categories)
        })
    }

    useEffect (() => {
        getCategories();
    } , [])

    // console.log("The slider is " , slider);
  return (
    <View>
      <Text style={styles.heading}>Categories for You</Text>
      <FlatList 
      data={categories}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({item , index}) => (
        <View style={{marginRight:20 , display:"flex" , flexDirection:"row" , gap:20 , alignItems:"center"}}>
            <View style={{backgroundColor:Colors.PRIMARY , borderRadius:30 , padding:10}}>
                <Image source={{uri:item?.icon?.url}} 
                style={styles.CategoriesImage}
                />
            </View>
        </View>
      )}
      />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
    heading:{
        fontSize:20,
        marginBottom:10,
    },
    CategoriesImage:{
        width:60,
        height:60,
    }
})