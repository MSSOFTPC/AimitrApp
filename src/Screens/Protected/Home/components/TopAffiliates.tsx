import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import GradientHeading from '../../../../components/GradientHeading/GradientHeading'
import {YStack,XStack, ScrollView, Text} from 'tamagui'
import Affiliate from '../../../../components/Affiliate/Affiliates'
import Utils from '../../../../Utilities/Utilities'
import { InstructorType } from '../../../../api/Instructor/InstructorType'
import { AffiliatorGetAllAction } from '../../../../api/affiliators/AffiliatorsAction'

const Affiliates = [
    {
        title:"Mohd Samar",
        image:"https://img.freepik.com/free-photo/fashion-girl-walking-summer-city_1157-20307.jpg"
    },
     {
        title:"Mohd Ahmad",
        image:"https://img.freepik.com/free-photo/fashion-girl-walking-summer-city_1157-20307.jpg"
    },
     {
        title:"Mohd Khan",
        image:"https://img.freepik.com/free-photo/fashion-girl-walking-summer-city_1157-20307.jpg"
    }
]

const TopAffiliates = () => {
   const Utilities = new Utils()
   const isDark = Utilities.isDark()

    const [getInstructors, setgetInstructors] = useState<Partial<InstructorType>[]>([])
    const [loading, setLoading] = useState(true)
  
    useEffect(() => {
      AffiliatorGetAllAction({
        query: "",
        onSuccess: (res) => {
          // console.log("res",res)
          setgetInstructors(res)
          setLoading(false)
        }
      })
    }, [])

  return (
     <YStack pt={30} pb={30} px={20} style={{backgroundColor:isDark ? "black" : "white"}}>
      {/* Header */}
      <XStack justifyContent="space-between" alignItems="center">
        <GradientHeading>Top Affiliates</GradientHeading>
      </XStack>

      <Text color={isDark ?  "white" :"#999"} mt={5}>
        Stay updated with the latest in your industry
      </Text>

      {/* Carousel */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 20 }}
      >
        {getInstructors.map((affiliate,index) => (
           <Affiliate isDark={isDark} affiliate={affiliate} index={index+1} />
        ))}
      </ScrollView>
    </YStack>
  )
}

export default TopAffiliates