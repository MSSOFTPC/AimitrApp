// import { View } from 'react-native'
import React, { useState } from 'react'
import { ScrollView, Text, View } from 'tamagui'
import TopBar from '../../../../components/TopBar/TopBar'
import ProfileCard from '../components/ProfileCard'
import GlobalButton from '../../../../components/Button/Button'
import Bottomsheet from '../../../../Bottomsheet/Bottomsheet'
import Utils from '../../../../Utilities/Utilities'

const Verification = () => {

    const tabTitles = ["Enrolled", "Active", "Completed"];
    const [pandetailsshow,setpandetailsshow] = useState(false)
    const [bankdetailsshow,setbankndetailsshow] = useState(false)
    const Utilities = new Utils()
    const isDark = Utilities.isDark()

  return (
    <ScrollView style={{flex:1,backgroundColor:isDark ? "black" : "white"}}>
        <TopBar />
        <View style={{}}>
            <Text style={{color:"#868686",fontWeight:400,textAlign:"center",paddingHorizontal:20,marginVertical:20}}>Noted: Your KYC is pending. Completed your KYC for payment processing </Text>
            <ProfileCard />

            <View style={{padding:20}}>
              <Text style={{fontSize:20}}>Verify your identity</Text>
              <Text style={{textAlign:"center",marginTop:20, lineHeight:28.6}}>In order to get verified you should submit all following  required information. It is recommended to start by identity or Address verification .</Text>
            </View>

        <View style={{margin:15, gap:20 }}    >
        
        <View style={{flexDirection:"row",borderRadius:40,backgroundColor:"#B4C4FF21", justifyContent:"space-between",paddingHorizontal:20, paddingVertical:10,alignItems:"center"}}>
            <Text>PAN Number</Text>
            <GlobalButton onPress={()=>setpandetailsshow(true)}>Update</GlobalButton>
        </View>
         <View style={{flexDirection:"row",borderRadius:40,backgroundColor:"#B4C4FF21", justifyContent:"space-between",paddingHorizontal:20, paddingVertical:10,alignItems:"center"}}>
            <Text>Bank Details</Text>
            <GlobalButton onPress={()=>setpandetailsshow(true)}>Update</GlobalButton>
        </View>

    </View>

      <Bottomsheet open={pandetailsshow} onClose={()=>setpandetailsshow(false)}>
            <Text>Form</Text>
      </Bottomsheet>

      {/* Bank */}
       <Bottomsheet open={bankdetailsshow} onClose={()=>setbankndetailsshow(false)}>
            <Text>Form</Text>
      </Bottomsheet>


        </View>
    </ScrollView>
  )
}

export default Verification