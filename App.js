import React from 'react';
import { View, StyleSheet } from 'react-native';
import Stopwatch from './components/StopWatch';

export default function App() {
  return (
    <View style={StyleSheet.container}>
      <Stopwatch />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});