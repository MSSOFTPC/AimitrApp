import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ScrollView } from 'tamagui'
import TopBar from '../../../../components/TopBar/TopBar'
import UploadBtn from '../../../../components/Form/Upload/UploadBtn'
import ProfileCard from '../components/ProfileCard'
import IncomeCard from '../components/Widget'
import { useNavigation } from '@react-navigation/native'
import Utils from '../../../../Utilities/Utilities'

const MainScreen = () => {
    const {navigate} = useNavigation()
      const Utilities = new Utils()
    const isDark = Utilities.isDark()
  return (
    <ScrollView style={{flex:1,backgroundColor:isDark ? "black" : "white"}}>
        <TopBar />
          <View style={{}}>
              <Text style={{color:"#868686",fontWeight:400,textAlign:"center",paddingHorizontal:20,marginVertical:20}}>Noted: Your KYC is pending. Completed your KYC for payment processing </Text>
              <ProfileCard />
            <View  style={{ flexDirection: "row", flexWrap: "wrap",gap:15, justifyContent: "space-around", padding: 20 }} >
              <IncomeCard title="Total Income" amount="$45.500,12" />
              <IncomeCard title="Direct Income" amount="$250,5" />
              <IncomeCard title="Indirect Income" amount="$5678" />
              <IncomeCard title="Wallet Balance" amount="$45678" />
            </View>
        </View>
    </ScrollView>
  )
}

export default MainScreen