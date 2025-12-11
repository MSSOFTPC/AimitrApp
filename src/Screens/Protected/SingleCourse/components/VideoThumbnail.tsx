import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const VideoThumbnail = ({onPress}) => {
  const thumbnail =
    'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80';

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.card}>
        <Image source={{ uri: thumbnail }} style={styles.thumbnail} />

        {/* Play icon */}
        <View style={styles.iconWrapper}>
          <Ionicons name="play-circle" size={64} color="white" style={styles.icon} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default VideoThumbnail;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  card: {
    width: 300,
    height: 180,
    borderRadius: 16,
    backgroundColor: '#fff',
    overflow: 'hidden',

    // shadow for iOS
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 8,

    // shadow for Android
    elevation: 8,
  },
  thumbnail: {
    width: '100%',
    height: '100%',
  },
  iconWrapper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -32 }, { translateY: -32 }],
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    opacity: 0.9,
  },
});
