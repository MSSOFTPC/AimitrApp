import { View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { H3, ScrollView, Text } from 'tamagui'
import TopBar from '../../../../components/TopBar/TopBar'
import ProfileCard from '../components/ProfileCard'
import IncomeCard from '../components/Widget'
import { useNavigation } from '@react-navigation/native'
import {Copy,Check} from '@tamagui/lucide-icons'
import * as Clipboard from 'expo-clipboard';
import Utils from '../../../../Utilities/Utilities'

const Referrals = () => {
    const {navigate} = useNavigation()
    const [iscopies,setiscopies] = useState(false)
     const Utilities = new Utils()
    const isDark = Utilities.isDark()

    const copy = async()=>{
         await Clipboard.setStringAsync('hello world');
         setiscopies(true)
         setTimeout(() => {
            setiscopies(false)
         }, 3000);
    }
  return (
    <ScrollView style={{flex:1,backgroundColor:isDark ? "black" : "white"}}>
        <TopBar />
        <View style={{}}>
            <Text style={{color:"#868686",fontWeight:400,textAlign:"center",paddingHorizontal:20,marginVertical:20}}>Noted: Your KYC is pending. Completed your KYC for payment processing </Text>
            <ProfileCard />

            <View style={{padding:20}}>
                <Text style={{fontSize:20,textAlign:"center"}}>Lifetime Returns , Zero effort</Text>
                <Text style={{textAlign:"center",marginTop:20,lineHeight:28.6}}>In order to get verified you should submit all following  required information. It is recommended to start by identity or Address verification .</Text>
            </View>

            <View style={{backgroundColor:isDark ? "white" : "grey",padding:20,margin:15,justifyContent:"center",alignItems:"center"}}>
                <Text color={isDark ? "black" : "white"}>Your personal Invite code</Text>
                <H3 color={isDark ? "black" : "white"}>HZX92472</H3>
                <TouchableOpacity onPress={copy} style={{flexDirection:"row",gap:10}}>
                    {iscopies ? <Check size={20} color={isDark ? "black" : "white"}/>  : <Copy size={20} color={isDark ? "black" : "white"}/> } 
                    <Text color={isDark ? "black" : "white"}>TAP TO COPY LINK</Text>
                </TouchableOpacity>
            </View>

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

export default Referrals