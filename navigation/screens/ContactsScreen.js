import React from 'react';
import { View, StyleSheet } from 'react-native';
import Background from './BackgroundImage';

export default function ContactsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Background />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
