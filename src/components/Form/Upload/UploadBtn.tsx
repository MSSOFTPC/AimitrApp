import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker';
import GlobalButton from '../../Button/Button';

const UploadBtn = () => {
    const [image, setImage] = useState<string | null>(null);


    const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };


  return (
    <View>
      <GlobalButton onPress={pickImage}>Upload</GlobalButton>
    </View>
  )
}

export default UploadBtn