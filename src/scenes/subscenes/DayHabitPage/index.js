import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, Button, StyleSheet } from 'react-native';
import { getAllHabits } from '../../../dataStorage/habitsService'
import DayHabitBox from './DayHabitComponent';

const DayHabits = ({ navigation }) => {
  const [dayHabitsList, setDayHabitsList] = useState([]);

 function fetchdata() {
    let result = getAllHabits();
    setDayHabitsList(result);
    return result;
  }

  useEffect(() => {
    fetchdata();

    return () => fetchdata();
  }, []);


  return (
    <SafeAreaView style={styles.safe}>
      <View>
        <Text> Minchia zì. Sarebbero queste le mie abitudini? </Text>
        {dayHabitsList.map((habit) => {
          return <DayHabitBox name={habit.name} low={habit.low} medium={habit.medium} high={habit.high} />
        })}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
});



export default DayHabits;
