import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './Header'
import { useUser } from '@clerk/clerk-expo'
import Slider from './Slider'
const HomeScreen = () => {
  const {user , isLoading} = useUser();
  return (
    <View>
      <Header />
      <View style={{padding:20}}>
        <Slider />
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})