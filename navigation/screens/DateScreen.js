import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import BackgroundImage from './BackgroundImage';
import { calculateNumberPathAndArhetip } from '/Users/antonrybak/Desktop/react/numer/function/Function';

export default function DateScreen({ navigation }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (event, date) => {
    setSelectedDate(date || selectedDate);
  };

  const { digitPath, arhetip } = calculateNumberPathAndArhetip(selectedDate);

  return (
    <View style={styles.container}>
      <BackgroundImage />
      <View style={styles.contentContainer}>
        <Text
          onPress={() => navigation.navigate('Home')}
          style={{ fontSize: wp('6%'), fontWeight: 'bold', marginTop: hp('2%'), textAlign: 'center' }}
        >
          Введите дату рождения
        </Text>
        <DateTimePicker
          value={selectedDate}
          mode='date'
          display='spinner'
          onChange={handleDateChange}
          textStyle={{ fontSize: wp('4.5%'), fontWeight: 'bold' }}
        />
        {/* заменяем текст на число */}
        <Text style={{ fontSize: wp('6%'), marginTop: hp('2%') }}>Число пути {digitPath}</Text>
        {/* выводим архетип, если он определен */}
        {arhetip && <Text style={{ fontSize: wp('6%'), marginTop: hp('2%') }}>Архетип {arhetip}</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // непрозрачный фон контента
    borderRadius: wp('5%'),
    padding: wp('5%'),
    width: wp('80%'),
    height: hp('60%'),
    alignItems: 'center',
  },
});
