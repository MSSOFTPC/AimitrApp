import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native'
import React, { useEffect } from 'react'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useDispatch } from 'react-redux';
import { toast } from '@backpackapp-io/react-native-toast';
import { login } from '../../../Redux/Slices/AuthSlice';
import { AuthGLoginAction } from '../../../api/Users/Auth/Auth';
import {GOOGLE_CLIENT_ID} from '@env'


const GoogleLoginBtn = ({onFailed}) => {
  const dispatch = useDispatch()
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/userinfo.email'],
      webClientId: GOOGLE_CLIENT_ID,
      offlineAccess:true,
      forceCodeForRefreshToken:true
    });
  }, []);

  const handleSignIn = async () => {
    try {
    //   dispatch(isloading(true));
  
      // ⛔️ Clear previous session to force account chooser
      await GoogleSignin.signOut();
  
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog:true});
      const user = await GoogleSignin.signIn();
  
      const { idToken } = user.data || {};
  
      if (idToken) {
        AuthGLoginAction({
          token: idToken,
          onSuccess: (res) => {
            dispatch(login(res));
            toast.success("Welcome to Ai Mitr");
          },
          onFailed:(e)=>{
            console.log("error login",e)
            onFailed?.(e)
          },
        //   onFinally: () => dispatch(isloading(false)),
        });
      } else {
        // dispatch(isloading(false));
      }
    } catch (error) {
      console.error(error);
    //   dispatch(isloading(false));
      Alert.alert("Login Failed", String(error.toString()));
    }
  };

  return (
     <TouchableOpacity style={styles.googleBtn} onPress={handleSignIn}>
        <View style={{justifyContent:"center",alignItems:"center",flexDirection:"row"}}>
        <Image source={require('../../../assets/google.png')} />
        <Text style={styles.googleText}>{"Login with Google"}</Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    googleBtn: {
        width: 300,
        height: 42,
        marginTop: 25,
        borderRadius: 20,
        backgroundColor: '#E8E8E8',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
      },
      googleText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#AFA9A9',
        marginLeft: 10,
      },
})

export default GoogleLoginBtn