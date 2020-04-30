import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, FlatList, } from 'react-native';
import { getAllHabits, deleteHabit, updateHabitName, } from '../../dataStorage/habitsService';
import HabitComponent from './HabitComponent';
import AddHabitButton from './AddButtonComponent.js'

const Habits = ({ navigation }) => {
  const [habitsList, setHabitsList] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);
  const [addIsDisabled, setAddIsDisabled] = useState(false);

  function OnOpenText() {
    if (isEmpty) {
      return (
        <Text>NON CI SONO ANCORA ABITUDINI</Text>
      );
    }
    else return (
      <Text>ECCO LE TUE ABITUDINI</Text>
    );
  }

  function FlatListHabits() {
    if (isEmpty) {
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

  useEffect(() => {
    let result = getAllHabits();
    
    console.log(result)

    if (!result.isEmpty()) {
      setHabitsList(result);
      setIsEmpty(false);
      if (result.length >= 3) {
        setAddIsDisabled(true)
      }
    }
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
        <AddHabitButton disabled={addIsDisabled} navigation={navigation} />
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
