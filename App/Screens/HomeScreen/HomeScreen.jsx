import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './Header'
import { useUser } from '@clerk/clerk-expo'

const HomeScreen = () => {
  const {user , isLoading} = useUser();
  return (
    <View>
      <Header />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})