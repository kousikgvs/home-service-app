import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './Header'
import { useUser } from '@clerk/clerk-expo'
import Slider from './Slider'
import Categories from './Categories'

const HomeScreen = () => {
  const {user , isLoading} = useUser();
  return (
    <View>
      <Header />
      <View style={{padding:20 , display:"flex" , flexDirection:"column" , gap:25}}>
        <Slider />
        <Categories />
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})