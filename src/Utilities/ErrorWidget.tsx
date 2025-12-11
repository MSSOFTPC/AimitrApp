import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const ErrorWidget = ({ error }) => {
  // Agar error invalid ya empty ho to null return karo
  if (
    !error || 
    (typeof error === 'string' && error.trim() === '') ||
    (Array.isArray(error) && error.length === 0) ||
    (typeof error === 'object' && Object.keys(error).length === 0)
  ) {
    return null;
  }

  const renderError = (err) => {
    if (typeof err === 'string') {
      return <Text style={styles.errorText}>{err}</Text>;
    }

    if (Array.isArray(err)) {
      return err.map((e, index) => (
        <Text key={index} style={styles.errorText}>
          • {e}
        </Text>
      ));
    }

    if (typeof err === 'object') {
      return Object.entries(err).map(([key, value], index) => (
        <Text key={index} style={styles.errorText}>
          {key}: {value?.toString()}
        </Text>
      ));
    }

    return <Text style={styles.errorText}>Unknown error format</Text>;
  };

  return <View style={styles.container}>{renderError(error)}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fdecea',
    borderLeftWidth: 4,
    borderLeftColor: '#f44336',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  errorText: {
    color: '#d32f2f',
    fontSize: 14,
    marginBottom: 2,
  },
});

export default ErrorWidget;
