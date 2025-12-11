import { TouchableOpacity, View } from 'react-native'
import React, { Suspense, useEffect, useState } from 'react'
import { Input, ScrollView, Text, useTheme, YStack } from 'tamagui'
import { FormikInput } from '../../../../components/Form/FormikInput'
import {Mail} from '@tamagui/lucide-icons'
import GlobalButton from '../../../../components/Button/Button'
import Divider from '../../../../components/Divider/Divider'
import { useNavigation } from '@react-navigation/native'
import Bottomsheet from '../../../../Bottomsheet/Bottomsheet'
import RegisterOTPScreen from '../SubScreen/RegisterOTP'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { VerifyEmailAction } from '../../../../api/Users/Auth/Auth'


const RegisterForm = () => {
    const theme = useTheme()
    const {navigate} = useNavigation()
    const [open,setOpen] = useState(false)

    const [initialValues,setinitialValues] = useState({fullName:null,phone:null,email:null,password:null})

    const onSubmit = (v) => {
      VerifyEmailAction({
        email: v.email,
        onSuccess: () => {
            setOpen(true);
        },
        onFailed:(f)=>{
          console.log("error",f)
        }
      });
    };
  
      const validationSchema = Yup.object().shape({
        fullName:Yup.string().required("Name is required"),
        phone:Yup.string().required("Phone is required"),
        email:Yup.string().required("Email is required"),
        password:Yup.string().required("Password is required"),
      })


  return (
    <ScrollView style={{}} showsVerticalScrollIndicator={false}>
      <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
              {
                ({errors, values, handleChange, handleBlur, handleSubmit})=>(
                    <>
                  <FormikInput handleChange={handleChange}  values={values} errors={errors} name={"fullName"} placeholder={"Enter Name"}  />
                  <FormikInput numeric handleChange={handleChange}  values={values} errors={errors} name={"phone"} placeholder={"Enter Phone"}  />
                  <FormikInput handleChange={handleChange}  values={values} errors={errors} name={"email"} placeholder={"Enter Email"}  />
                  <FormikInput handleChange={handleChange}  values={values} errors={errors} name={"password"} placeholder={"Enter Password"}  />
                  <TouchableOpacity onPress={()=>navigate("LoginScreen")}><Text style={{marginLeft:"auto"}}>Already have an Account?</Text></TouchableOpacity>
                  <GlobalButton style={{marginTop:40}} onPress={()=>handleSubmit()}>Register</GlobalButton>
                  <Divider style={{marginTop:40}}>Or Register with</Divider>


                  <Bottomsheet snapPoints={[40]} open={open} onClose={() => setOpen(false)}>
                        <RegisterOTPScreen navigate={navigate} values={values} isDone={() => setOpen(false)} />
                  </Bottomsheet>
                </>
                )
              }
        </Formik>
    </ScrollView>
  )
}

export default RegisterForm