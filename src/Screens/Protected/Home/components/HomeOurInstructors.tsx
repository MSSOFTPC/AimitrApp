import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import GradientHeading from '../../../../components/GradientHeading/GradientHeading'
import Instructor from '../../../../components/Instructor/Instructor'
import { ScrollView } from 'react-native-gesture-handler'
import Utils from '../../../../Utilities/Utilities'
import { Text } from 'tamagui'
import { InstructorType } from '../../../../api/Instructor/InstructorType'
import { InstructorGetAllAction } from '../../../../api/Instructor/InstructorAction'

const instructors = [
    {
        title:"Mohd Samar",
        message:"Hello",
        image:"https://www.shutterstock.com/image-photo/young-happy-business-woman-sitting-260nw-2223351415.jpg"
    },
     {
        title:"Mohd Ahmad",
        message:"Hello",
        image:"https://www.shutterstock.com/image-photo/young-happy-business-woman-sitting-260nw-2223351415.jpg"
    },
     {
        title:"Mohd Khan",
        message:"Hello",
        image:"https://www.shutterstock.com/image-photo/young-happy-business-woman-sitting-260nw-2223351415.jpg"
    },
]

const HomeOurInstructors = () => {
     const Utilities = new Utils()
    const isDark = Utilities.isDark()

    const gradientcolor = isDark ? ["black","black"] : ['#FFE7A1', '#fff']

    const [getInstructors, setgetInstructors] = useState<Partial<InstructorType>[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        InstructorGetAllAction({
        query: "",
        onSuccess: (res) => {
            setgetInstructors(res)
            setLoading(false)
        }
        })
    }, [])

  return (
     <LinearGradient
          colors={gradientcolor}
          start={{x:.9,y:.5}}
          style={{
            paddingHorizontal: 20,
            paddingTop: 60,
            paddingBottom: 20,
          }}
        >
            <GradientHeading>Our Instructors</GradientHeading>
            <Text>Stay updated with the latest in your industry</Text>
             <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ marginTop: 20, gap:10 }}
            >
                {getInstructors.map((instructor) => (
                    <Instructor isDark={isDark} instructor={instructor} />
                ))}
            </ScrollView>

        </LinearGradient> 
  )
}

export default HomeOurInstructors