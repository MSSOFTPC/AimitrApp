import React from 'react';
import { View,  Image, StyleSheet } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import { Text } from 'tamagui';

const AffiliateCard = ({ index, affiliate, isDark }) => {
  const {_id,avatar,fullName} = affiliate
  return (
    <View style={styles.cardContainer}>
      {/* Gradient Number using MaskedView */}
      <View style={styles.numberWrapper}>
        <MaskedView
          maskElement={
            <Text style={[styles.numberText, { backgroundColor: 'transparent' }]}>
              {index}
            </Text>
          }
        >
          <LinearGradient
            colors={['#C08C28', '#FFD700']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
          >
            <Text style={[styles.numberText, { opacity: 0 }]}>{index}</Text>
          </LinearGradient>
        </MaskedView>
      </View>

      {/* Image Box */}
      <View style={styles.imageBox}>
        <Image source={{ uri: avatar }} style={styles.image} />
      </View>

      {/* Name */}
      <Text style={styles.name}>{fullName}</Text>
    </View>
  );
};

export default AffiliateCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginLeft:10
  },
  numberWrapper: {
    position: 'absolute',
    left: -11,
    top: 35,
    zIndex: 2,
  },
  numberText: {
    fontSize: 60,
    fontWeight: 'bold',
  },
  imageBox: {
    width: 100,
    height: 100,
    borderRadius: 16,
    backgroundColor: '#ddd',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  name: {
    marginTop: 6,
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
});
