import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  }
})

export default HomeScreen;
