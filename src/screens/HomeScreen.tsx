import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Panel from '@components/Panel';

const HomeScreen = () => {
  return (
    <View style={styles.container}>

      <Panel />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  }
})

export default HomeScreen;
