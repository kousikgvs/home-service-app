import { StyleSheet, ScrollView, View } from 'react-native'
import React from 'react'
import Header from './Header'
import { useUser } from '@clerk/clerk-expo'
import Slider from './Slider'
import Categories from './Categories'
import BusinessCard from './BusinessCard'

const HomeScreen = () => {
  const { user, isLoading } = useUser();
  return (
    <ScrollView style={{ flex: 1 }}>
      <View>
        <Header />
        <View style={{ padding: 20, display: "flex", flexDirection: "column", gap: 25 }}>
          <Slider />
          <Categories />
          <BusinessCard />
        </View>
      </View>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
