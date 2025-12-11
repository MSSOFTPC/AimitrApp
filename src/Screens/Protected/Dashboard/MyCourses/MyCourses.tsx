import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'tamagui'
import TopBar from '../../../../components/TopBar/TopBar'
import ProfileCard from '../components/ProfileCard'
import IncomeCard from '../components/Widget'
import DynamicGradientTabs from '../components/GlobalTab'
import MyCourse from '../components/MyCourse'
import Utils from '../../../../Utilities/Utilities'

const MyCourses = () => {
    const Utilities = new Utils()
    const isDark = Utilities.isDark()

    const tabTitles = ["Enrolled", "Active", "Completed"];
    const tabBodies = [
        <MyCourse
  image="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
  title="AI Genius Program"
  lessons={12}
  students={50}
  reviews={15}
  rating={5}
  progress={80}
/>,
        <Text>Your active courses are ongoing ⚡</Text>,
        <Text>Congrats! You completed 3 courses 🎉</Text>,
    ];

  return (
    <ScrollView style={{flex:1,backgroundColor:isDark ? "black" : "white"}}>
        <TopBar />
        <View style={{}}>
            <Text style={{color:"#868686",fontWeight:400,textAlign:"center",paddingHorizontal:20,marginVertical:20}}>Noted: Your KYC is pending. Completed your KYC for payment processing </Text>
            <ProfileCard />

            <View    >
              <DynamicGradientTabs tabs={tabTitles} tabContents={tabBodies} />
            </View>
        </View>
    </ScrollView>
  )
}

export default MyCourses