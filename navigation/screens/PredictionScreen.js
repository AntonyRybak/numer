import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import BackgroundImage from './BackgroundImage';
import ButtonsPrediction from '/Users/antonrybak/Desktop/react/numer/buttons/ButtonsPrediction';

export default function PredictionScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <BackgroundImage />
      <ButtonsPrediction />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
