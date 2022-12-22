import React, { useEffect } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { Price } from '@models/Price.model';

const Panel = () => {

  const isPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
  };

  const isLandscape = () => {
    const dim = Dimensions.get('screen');
    return dim.width >= dim.height;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Panel</Text>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    top: 100,
    backgroundColor: "red",
    height: '50%',
  },

  text: {
    padding: 24
  }
})

export default Panel;