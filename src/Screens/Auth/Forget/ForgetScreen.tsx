import { View } from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import GoBack from '../../../components/GoBack'
import { getVariable, getVariableValue, H3, H5, Text, useTheme } from 'tamagui'
import ForgetForm from './components/Form'

const LoginScreen = () => {
  const theme = useTheme()

  
  return (
    <SafeAreaView style={{flex:1,backgroundColor:getVariable(theme.background),justifyContent:"center",gap:30,padding:20}}>
        <View style={{gap:40}}>
            <GoBack />
            <View>
              <H5>Forgot Password?</H5>
              <Text>Don't worry! It occurs. Please enter the email address linked with your account.</Text>
            </View>
            <ForgetForm />
        </View>
    </SafeAreaView>
  )
}

export default LoginScreen