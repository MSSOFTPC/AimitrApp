import { View, Text, StyleProp, ImageStyle } from 'react-native'
import React, { StyleHTMLAttributes } from 'react'
import { Image } from 'tamagui'
import LogoImg from '../../assets/logo.png'

interface LogoProps {
  style?: StyleProp<ImageStyle>;
}

const Logo = ({style}:LogoProps) => {
  return (
    <View style={{width:150,height:150,...style}}>
        <Image src={LogoImg} style={{height:"100%",width:"100%"}} />
    </View>
  )
}

export default Logo