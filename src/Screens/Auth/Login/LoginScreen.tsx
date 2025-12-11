import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import GoBack from '../../../components/GoBack'
import { getVariable, getVariableValue, H3, H5, useTheme } from 'tamagui'
import LoginForm from './components/LoginForm'
import Heading from '../../../components/Heading/Heading'
import Logo from '../../../components/Logo/Logo'
import GoogleLoginBtn from '../GloginWidget/GloginWidget'

const LoginScreen = () => {
  const theme = useTheme()
 

  
  return (
    <SafeAreaView style={{flex:1,backgroundColor:getVariable(theme.background),justifyContent:"center",gap:30,padding:20}}>
            <View style={{width:"100%",justifyContent:"center",alignItems:"center"}}>
              <Logo />
            </View>
            <Heading title={"Welcome back! Glad to see you, Again!"}/>
            <LoginForm />
            <GoogleLoginBtn />
    </SafeAreaView>
  )
}

export default LoginScreen