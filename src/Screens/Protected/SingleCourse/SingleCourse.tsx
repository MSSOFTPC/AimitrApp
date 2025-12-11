import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import TopBar from '../../../components/TopBar/TopBar'
import { StatusBar } from 'expo-status-bar'
import VideoPlayer from './components/VideoPlayer'
import GradientHeading from '../../../components/GradientHeading/GradientHeading'
import RatingWidget from './components/RatingWidget'
import Description from './components/Description'
import LessonsTab from './components/LessonsTab'
import ReviewCard from './components/ReviewCard'
import FeaturedReviewCard from './components/FeaturedRevies'
import AuthorCard from './components/AuthorCard'
import PricingCard from './components/PricingCard'
import Bottomsheet from '../../../Bottomsheet/Bottomsheet'
import { Avatar, AvatarImage } from 'tamagui'
import { useRoute } from '@react-navigation/native'

const SingleCourse = () => {
    const router = useRoute()
    const course = router.params
    console.log("course",course)
    const [showrating,setshowrating] = useState(false)
    const [showauthor,setshowauthor] = useState(false)
    const [showrequirement,setshowrequirement] = useState(false)
      const description = "This is a beautifully designed product built with attention to detail, comfort, and quality. It offers excellent durability and style for everyday use." 
      const requirements = `Become an advanced, confident, and
modern JavaScript developer from
scratch.

Have an intermediate skill level of Pythonprogramming.

Have a portfolio of various data analysis projects.

Use the numpy library to create and
manipulate arrays.
`
  return (
     <ScrollView style={{flex:1,backgroundColor:"white"}}>
        <StatusBar style={"dark"}/>
        <TopBar />
        <View style={{paddingHorizontal:20}}>
            <GradientHeading>{course?.name}</GradientHeading>
            <Text>Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!</Text>
             <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                <TouchableOpacity style={{flexDirection:"row",gap:10,alignItems:"center"}} onPress={()=>setshowauthor(true)}>
                    <Avatar circular size="$2">
                        <Avatar.Image src="http://picsum.photos/200/300" />
                        <Avatar.Fallback bc="red" />
                    </Avatar>
                    <Text>Mohd Samar</Text>
                </TouchableOpacity>
                <RatingWidget handleGlobalClick={()=>setshowrating(true)} style={{gap:5}} disabled initialRating={5} size={16}/>
            </View>
            <VideoPlayer />
            <PricingCard />
            <TouchableOpacity style={{flexDirection:"row",justifyContent:"center",marginTop:20}} onPress={()=>setshowrequirement(true)}>
                <Text style={{fontSize:16,fontWeight:"600"}}>Requirements</Text>
            </TouchableOpacity>
            <Description title={"Product Overview"} description={description} />
            <LessonsTab />
            
            
           

            {/* Modal */}
            <Bottomsheet open={showrating} onClose={()=>setshowrating(false)}>
                <ReviewCard />
                <FeaturedReviewCard />
            </Bottomsheet>

            {/* Author */}
            <Bottomsheet open={showauthor} onClose={()=>setshowauthor(false)}>
                 <AuthorCard />
            </Bottomsheet>

             {/* Requirement */}
            <Bottomsheet open={showrequirement} onClose={()=>setshowrequirement(false)}>
                 <Description title={"Requirements"} description={requirements} />
            </Bottomsheet>
           

        </View>
     </ScrollView>
  )
}

export default SingleCourse