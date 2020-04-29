import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, StyleSheet, FlatList} from 'react-native';
import {
  getAllHabits,
  deleteHabit,
  updateHabitName,
} from '../../dataStorage/habitsService';
import HabitComponent from './HabitComponent';
import AddHabit from './AddHabitComponent';

function OnOpenPage(props) {
  if (props.empty) {
    return (
      <View>
        <Text>
          Non ci sono ancora abitudini, clicca sul + per aggiungerne una
        </Text>
      </View>
    );
  } else {
    return (
      <View>
        <Text>Ecco le tue abitudini</Text>
      </View>
    );
  }
}

const Habits = () => {
  const [habitsList, setHabitsList] = useState([
    {
      id: 1,
      name: 'allenamento',
      low: '3 flessioni',
      medium: '5 flessioni',
      high: '15 flessioni',
    },
    {
      id: 2,
      name: 'bere acqua',
      low: '3 bicchieri',
      medium: '5 bicchieri',
      high: '15 bicchieri',
    },
    {
      id: 3,
      name: 'Studiare ML',
      low: '20 minuti',
      medium: '50 minuti',
      high: '90 minuti',
    },
  ]);
  const [isEmpty, setIsEmpty] = useState(false); //da cambiare in true

  function FlatListHabits() {
    if (isEmpty) {
      return null;
    } else {
      return habitsList.map(habit => (
        <HabitComponent
          key={habit.id}
          habitName={habit.name}
          low={habit.low}
          medium={habit.medium}
          high={habit.high}
        />
      ));
    }
  }

  useEffect(() => {
    let result = getAllHabits();

    if (!result.isEmpty) {
      setHabitsList(result);
      setIsEmpty(false);
    }
  }, []);

  return (
    <SafeAreaView>
      <View>
        <OnOpenPage empty={isEmpty} style={styles.openPage} />
        <FlatListHabits />
        <AddHabit style={{marginRight: 30, alignSelf: 'flex-end'}} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  openPage: {
    flex: 1,
  },
});

export default Habits;
