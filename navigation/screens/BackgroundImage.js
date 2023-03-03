import React from 'react';
import { Image, StyleSheet } from 'react-native';
import backgroundImage from './background.png';

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 1, // прозрачность в 50%
  },
});

export default function BackgroundImage() {
  return <Image source={backgroundImage} style={styles.backgroundImage} resizeMode='cover' />;
}
