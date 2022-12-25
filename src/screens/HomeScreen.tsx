import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Layout from '@components/Layout';
import Panel from '@components/Panel';

const HomeScreen = () => {
  return (
    <Layout title='Home'>
      <Panel />
    </Layout>
  );
};

const styles = StyleSheet.create({

})

export default HomeScreen;
