import React, { memo, useState } from 'react'
import { useTheme, XStack, Sheet, Text,View, styled, YStack, AnimatePresence } from 'tamagui'
import { Mail } from '@tamagui/lucide-icons'
import { FormikInput } from '../../../../components/Form/FormikInput'
import GlobalButton from '../../../../components/Button/Button'
import Bottomsheet from '../../../../Bottomsheet/Bottomsheet'
import ForgetOtpScreen from '../SubScreen/ForgetOTP'
import ForgetCreateNewPassword from '../SubScreen/ForgetCreateNewPassword'
import { Formik } from 'formik'
import ErrorWidget from '../../../../Utilities/ErrorWidget'
import { ChangepasswordbyEmailAction } from '../../../../api/Chagepasswordbyemail/Auth'
import { toast } from '@backpackapp-io/react-native-toast'

const ForgetForm = () => {
  const theme = useTheme()
  const [open, setOpen] = useState(false)
  const [showCreatePasswordScreen, setShowCreatePasswordScreen] = useState(false)
  const [otp,setotp] = useState(null)


  const handleSubmit = (v)=>{
    ChangepasswordbyEmailAction({
      email:v.email,
      onSuccess:()=>{
          setOpen(true)
      },
      onFailed:(f)=>{
        toast.error(f)
      }
    })
     
  }

  return (
    <View style={{  }}>
      <Formik initialValues={{email:""}} onSubmit={handleSubmit}>
        {
          ({handleChange,values,errors,handleSubmit})=>{
            return <>
            <ErrorWidget error={errors}/>
            <FormikInput
              name={"email"}
              handleChange={handleChange}
              values={values}
              errors={errors}
              placeholder={"Enter Email"}
            />
            <GlobalButton  onPress={()=>handleSubmit()}>
              Send Code
            </GlobalButton>
            

      <Bottomsheet snapPoints={[40]} open={open} onClose={handleSubmit}>
        {!showCreatePasswordScreen && (
          <YStack>
            <ForgetOtpScreen email={values.email} isDone={(o) => { setotp(o); setShowCreatePasswordScreen(true); }} />
          </YStack>
        )}

        
          <AnimatePresence>
            {showCreatePasswordScreen && (
            <View key="my-square" animation="bouncy" enterStyle={{
              opacity: 0,
              x: -100,
            }}
              exitStyle={{
                opacity: 0,
                x: 100,
              }}
            >
            <ForgetCreateNewPassword otp={otp} email={values.email} onSave={()=>{setOpen(false);setShowCreatePasswordScreen(false)}} />
            </View>
              )}
          </AnimatePresence>
      
      </Bottomsheet>

      </>
          }
        }
      </Formik>
    </View>
  )
}

export default memo(ForgetForm)
