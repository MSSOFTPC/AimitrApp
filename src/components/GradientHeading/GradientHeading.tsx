import React from 'react';
import { Text, View } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';

const GradientHeading = ({children}) => {
  return (
    <MaskedView
      style={{ flex: 1, flexDirection: 'row', height:30 }}
      maskElement={
        <View
          style={{
            // Transparent background because mask is based off alpha channel.
            backgroundColor: 'transparent',
            flex: 1,
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: 'black',
              fontWeight: 'bold',
            }}
          >
            {children}
          </Text>
        </View>
      }
    >
      {/* Shows behind the mask, you can put anything here, such as an image */}
       <LinearGradient
            colors={['#0A6DFF', '#625AD8']}
            start={{ x: 0, y: .3 }}
            end={{ x: .2, y: 0 }}
            style={{ flex: 1 }}
          />
    </MaskedView>
  );
}

export default GradientHeading