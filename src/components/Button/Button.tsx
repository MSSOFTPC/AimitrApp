import React from 'react'
import { StyleSheet, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const GlobalButton = ({ children, onPress, style, loading = false }) => {
  return (
    <TouchableOpacity
      onPress={!loading ? onPress : null}
      activeOpacity={0.8}
      style={style}
      disabled={loading} // disable while loading
    >
      <LinearGradient
        colors={['#F9D423', '#A36B09']} // gold → brown gradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[styles.container, loading && styles.disabled]}
      >
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={styles.text}>{children}</Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  disabled: {
    opacity: 0.7, // thoda fade effect jab loading ho
  },
})

export default GlobalButton
