import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, FlatList, } from 'react-native';
import { getAllHabits, deleteHabitById, updateHabitName, } from '../../dataStorage/habitsService';
import HabitComponent from './HabitComponent';
import AddHabitButton from './AddButtonComponent.js';
import { MAX_HABITS } from '../../utils/generalVar';   




const Habits = ({ navigation }) => {
  
  const [habitsList, setHabitsList] = useState([]);

  function OnOpenText() {
    if (habitsList.length == 0) {
      return (
        <Text>NON CI SONO ANCORA ABITUDINI</Text>
      );
    }
    else return (
      <Text>ECCO LE TUE ABITUDINI</Text>
    );
  }

  function FlatListHabits() {
    if (habitsList.length == 0) {
      return null;
    } else {
      return (
        <FlatList
          data={habitsList}
          renderItem={habit =>
            <HabitComponent
              habitName={habit.item.name}
              low={habit.item.low}
              medium={habit.item.medium}
              high={habit.item.high}
            />
          }
          keyExtractor={habit => habit.id.toString()}
        />
      );
    }
  }

  function fetchdata() {

    let result = getAllHabits();
    setHabitsList(result);
    return result;

  }

  useEffect(() => {

    let res = fetchdata();
    res.addListener(fetchdata);

    return () => res.removeAllListeners();

  }, []);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.schermo}>
        <View style={styles.viewInitialText} >
          <OnOpenText />
        </View>
        <View style={styles.viewFlatList}>
          <FlatListHabits />
        </View>
        <AddHabitButton disabled={habitsList.length >= MAX_HABITS} navigation={navigation} />
      </View>
    </SafeAreaView >
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1
  },
  schermo: {
    flex: 1
  },
  viewInitialText: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  viewFlatList: {
    flex: 14,
  }


})

export default Habits;
