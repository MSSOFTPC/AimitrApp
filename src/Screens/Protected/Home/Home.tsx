import {  Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopBar from '../../../components/TopBar/TopBar'
import { StatusBar } from 'expo-status-bar'
import HomePopularCourse from './components/HomePopularCourse'
import GradientHeading from '../../../components/GradientHeading/GradientHeading'
import HomeOurInstructors from './components/HomeOurInstructors'
import { ScrollView } from 'react-native-gesture-handler'
import TopAffiliates from './components/TopAffiliates'
import HomeTestimonial from './components/HomeTestimonial'

const HomeScreen = () => {
  return (
    <ScrollView style={{flex:1,backgroundColor:"white",paddingBottom:50}}>
        <TopBar />
        <HomePopularCourse />
        <HomeOurInstructors />
        <TopAffiliates />
        <HomeTestimonial />
    </ScrollView>
  )
}

export default HomeScreen