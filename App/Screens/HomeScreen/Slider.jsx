import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import GlobalApi from '../../utils/GlobalApi'
import { useEffect } from 'react'
import { Image } from 'react-native'

const Slider = () => {
    const [slider , setSlider] = useState([]);
    const getSliders = () => {
        GlobalApi.getSlider().then(res => {
            // console.log("response" , res.sliders);
            setSlider(res?.sliders)
        })
    }

    useEffect (() => {
        getSliders();
    } , [])

    // console.log("The slider is " , slider);
  return (
    <View>
      <Text style={styles.heading}>Offers for You</Text>
      <FlatList 
      data={slider}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({item , index}) => (
        <View style={{marginRight:20}}>
            <Image source={{uri:item?.image?.url}} 
            style={styles.sliderImage}
            />
        </View>
      )}
      />
    </View>
  )
}

export default Slider

const styles = StyleSheet.create({
    heading:{
        fontSize:20,
        marginBottom:10,
    },
    sliderImage:{
        width:270,
        height:170,
        borderRadius:20,
    }
})