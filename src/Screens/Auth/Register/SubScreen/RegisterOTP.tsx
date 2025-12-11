import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import { getVariable, getVariableValue, H3, H5, H6, useTheme } from 'tamagui'
import GoBack from '../../../../components/GoBack'
import FormikOTPInput from '../../../../components/Form/FormikOTP'
import { Formik } from 'formik'
import GlobalButton from '../../../../components/Button/Button'
import { AuthRegisterAction } from '../../../../api/Users/Auth/Auth'
import { toast } from '@backpackapp-io/react-native-toast'

const RegisterOTPScreen = ({isDone,values,navigate}) => {


  const handleSubmit = (v)=>{
    if(v.otp.length !== 4){
      Alert.alert("Enter valid otp")
      toast.success("")
      return ;
    }
   AuthRegisterAction({
      otp:v.otp,
      fullName:values.fullName,
      email:values.email,
      password:values.password,
      phone:values.phone,
      onSuccess:()=>{
        isDone?.()
        toast.success("Thanks for Register");
       setTimeout(() => {
         navigate("LoginScreen")
       }, 300);
      },
      onFailed:(f)=>{
        toast.error(f)
        console.log("failed",f)
      }
   })
  }

  
  return (
    <View style={{marginTop:40,paddingHorizontal:30}}>
        <H6>OTP Verification</H6>
        <Text style={{marginBottom:30}}>Enter the verification code we just sent on your email address.</Text>
        <Formik initialValues={{otp:""}} onSubmit={handleSubmit} >
          {
            ({handleChange,values,errors,handleSubmit})=>{
              return <>
               <FormikOTPInput maxLength={4} handleChange={handleChange} errors={errors} name='otp' values={values} />
               <GlobalButton onPress={()=>handleSubmit()}>Create Account</GlobalButton>
               {/* <TouchableOpacity onPress={()=>isDone?.()}><Text>Done</Text></TouchableOpacity> */}
              </>
        }
          }
        </Formik>
    </View>
  )
}

export default RegisterOTPScreen