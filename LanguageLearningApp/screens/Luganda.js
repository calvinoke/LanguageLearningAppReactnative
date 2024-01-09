import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Luganda = (route) => {
  const { param1 } = route.params
  return (
    <View>
     <Text>{param1.value}</Text>
    </View>
  )
}

export default Luganda;

const styles = StyleSheet.create({})