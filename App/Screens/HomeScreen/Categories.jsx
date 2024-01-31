import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import GlobalApi from '../../utils/GlobalApi'
import { useEffect } from 'react'
import { Image } from 'react-native'

const Categories = () => {
    const [categories , setCategories] = useState([]);
    const getCategories = () => {
        GlobalApi.getCategeories().then(res => {
            // console.log("response" , res.sliders);
            setCategories(res?.sliders)
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
        <View style={{marginRight:20}}>
            <Image source={{uri:item?.image?.url}} 
            style={styles.CategoriesImage}
            />
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
        width:270,
        height:170,
        borderRadius:240,
    }
})