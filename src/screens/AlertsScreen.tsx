import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const AlertsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Alerts Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  }
})

export default AlertsScreen;
