import { TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'
import { Input, Text, useTheme } from 'tamagui'
import { FormikInput } from '../../../../components/Form/FormikInput'
import {Mail} from '@tamagui/lucide-icons'
import GlobalButton from '../../../../components/Button/Button'
import Divider from '../../../../components/Divider/Divider'
import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik';
import * as Yup from 'yup'
import { AuthLoginAction } from '../../../../api/Users/Auth/Auth'
import ErrorWidget from '../../../../Utilities/ErrorWidget'
import { toast } from '@backpackapp-io/react-native-toast'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../Redux/Store'
import { login } from '../../../../Redux/Slices/AuthSlice'

const LoginForm = () => {
    const theme = useTheme()
    const {navigate} = useNavigation()
    const [initialValues,setinitialValues] = useState({})
    const [error,seterror] = useState({})
    const dispatch = useDispatch()
    

    const onSubmit = (v:typeof initialValues)=>{
       AuthLoginAction({
        email:v.email,
        password:v.password,
        onSuccess:(res)=>{
          toast.success("Loggedin Success")
          setTimeout(() => {
            dispatch(login(res))
          }, 600);
        },
        onFailed:(e)=>{
          toast.error("Loggedin Failed")
          seterror(e)
        }
       })
    }

    const validationSchema = Yup.object().shape({
      email:Yup.string().required("Email is required"),
      password:Yup.string().required("Password is required"),
    })

  return (
    <View style={{}}>
      <Formik 
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {
          ({handleChange,values,errors,handleSubmit})=>(
              <>
              <ErrorWidget error={errors}/>
              <FormikInput handleChange={handleChange} values={values} errors={errors} name={"email"} placeholder={"Enter Email"} />
              <FormikInput handleChange={handleChange} values={values} errors={errors} name={"password"} placeholder={"Enter Password"} />
              <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                <TouchableOpacity onPress={()=>navigate("RegisterScreen")}><Text style={{marginLeft:""}}>Don't have an account?</Text></TouchableOpacity>
              <TouchableOpacity onPress={()=>navigate("ForgetScreen")}><Text style={{marginLeft:"auto"}}>Forget Password</Text></TouchableOpacity>
              </View>
              <GlobalButton onPress={()=>handleSubmit()} style={{marginTop:40}}>Login</GlobalButton>
              <Divider style={{marginTop:40}}>Or Login with</Divider>
              </>
      )
        }
      </Formik>
    </View>
  )
}

export default LoginForm