import { View, Text } from 'react-native'
import React, { Suspense, useEffect } from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import GoBack from '../../../components/GoBack'
import { getVariable, getVariableValue, H3, H5, useTheme } from 'tamagui'
import RegisterForm from './components/RegisterForm'
import { useNavigation } from '@react-navigation/native'
import GoogleLoginBtn from '../GloginWidget/GloginWidget'

const RegisterScreen = () => {
  const theme = useTheme()
   

  
  return (
    <SafeAreaView style={{flex:1,backgroundColor:getVariable(theme.background),justifyContent:"center",gap:30,padding:20}}>
        <View style={{gap:40}}>
            <GoBack />
            <H5>Welcome back! Glad to see you, Again!</H5>
            <Suspense>
              <RegisterForm />
              <GoogleLoginBtn />
            </Suspense>
        </View>
    </SafeAreaView>
  )
}

export default RegisterScreen