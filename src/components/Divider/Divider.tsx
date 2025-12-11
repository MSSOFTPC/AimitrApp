import { View, StyleSheet } from 'react-native'
import React from 'react'
import { Text } from 'tamagui'

const Divider = ({children,style}) => {
  return (
    <View style={[styles.divider,style]}>
        <View style={styles.span}></View>
        <Text>{children}</Text>
        <View style={styles.span}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    divider:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        gap:20
    },
    span:{
        flex:1,
        backgroundColor:"#E8ECF4",
        height:1,
    }
})

export default Divider