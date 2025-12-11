import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
// import { Toasts } from '@backpackapp-io/react-native-toast';
// import LoadingScreen from '../Components/LoadingScreen';
import Navigate from './Navigate';
import { Toasts } from '@backpackapp-io/react-native-toast'

const Navigation = () => {
//   const { isLoading } = useSelector(i => i.LoaderSlice);

  return (
    <SafeAreaProvider style={{flex:1}}>
        <KeyboardAvoidingView behavior={'padding'} style={{ flex: 1 }}>
          <Navigate />
           <Toasts />
        {/* {isLoading && <LoadingScreen />} */} 
        </KeyboardAvoidingView>
    </SafeAreaProvider>
  );
};

export default Navigation;
