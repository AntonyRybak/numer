import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

export default function ButtonsPrediction() {
  const [selected, setSelected] = useState('');
  const navigation = useNavigation();

  const handleSelect = (item) => {
    setSelected(item);
  };

  const buttons = [
    { id: '1', title: 'Число пути', screen: 'DigitPathScreen' },
    { id: '2', title: 'Архетип' },
    { id: '3', title: 'График судьбы' },
    { id: '4', title: 'Психо матрица Пифагора' },
    { id: '5', title: 'Число таланта' },
    { id: '6', title: 'Число удачи' },
  ];

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={[styles.button, item.title === selected && styles.buttonSelected]}
        onPress={() => {
          handleSelect(item.title);
          if (item.screen) {
            navigation.navigate(item.screen);
          }
        }}
      >
        <Text style={styles.buttonText}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={buttons}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    alignItems: 'center',
    paddingTop: hp('10%'),
    paddingBottom: hp('20%'),
  },
  button: {
    width: wp('45%'),
    marginBottom: hp('2%'),
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    paddingVertical: hp('2.8%'), // увеличиваем на 10%
    paddingHorizontal: wp('3%'),
    marginHorizontal: wp('2.5%'),
  },
  buttonText: {
    color: '#000',
    fontSize: wp('4%'),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonSelected: {
    backgroundColor: '#f6f6f6',
  },
});
