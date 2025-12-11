import { View, Text, TouchableOpacity } from 'react-native'
import React, { memo } from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import { getVariable, getVariableValue, H3, H5, H6, useTheme } from 'tamagui'
import GoBack from '../../../../components/GoBack'
import FormikOTPInput from '../../../../components/Form/FormikOTP'
import { Formik } from 'formik'
import GlobalButton from '../../../../components/Button/Button'
import { VeriyForgetPasswordbyotpAction } from '../../../../api/Chagepasswordbyemail/Auth'
import { toast } from '@backpackapp-io/react-native-toast'

const ForgetOtpScreen = ({isDone,email}) => {
  const theme = useTheme()
  
  const onSubmit = (e)=>{
    VeriyForgetPasswordbyotpAction({
      email:email,
      otp:e.otp,
      onSuccess:(s)=>{
        isDone?.(e.otp)
        toast.success("OTP Verified")
      },
      onFailed:()=>{
        toast.error("Wrong OTP entered")
      }
    })
  }

  
  return (
    <View style={{marginTop:40,padding:30}}>
        <H6>OTP Verification</H6>
        <Text>Enter the verification code we just sent on your email address.</Text>
        <Formik initialValues={{otp:null}} onSubmit={onSubmit}>
          {
            ({handleChange,values,errors,handleSubmit})=>{
              return (
                  <>
                  <FormikOTPInput maxLength={4} handleChange={handleChange} name='otp' errors={errors} values={values} />
                  <GlobalButton onPress={()=>handleSubmit()}>Verify</GlobalButton>
                  </>
              )
            }
          }
          
        </Formik>
    </View>
  )
}

export default memo(ForgetOtpScreen)