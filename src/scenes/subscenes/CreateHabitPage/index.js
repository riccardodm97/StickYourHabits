import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, Button, StyleSheet,TextInput} from 'react-native';
import {Habit} from '../../../dataStorage/models';
import { insertNewHabit } from '../../../dataStorage/habitsService';

const CreateHabit = ({navigation}) => {

  const [name, setName] = useState('');
  const [low, setLow] = useState('');
  const [medium, setMedium] = useState('');
  const [high, setHigh] = useState('');

  function addHabit(){
      var habit = new Habit(name,low,medium,high);
      insertNewHabit(habit);
      console.log(habit)
      navigation.goBack()
  }


  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.title}>
        <Text>CREA UNA NUOVA ABITUDINE</Text>
      </View>
      <View style={styles.inputHabit}>
        <View style={styles.viewName}>
          <TextInput style={styles.input} placeholder="inserisci il nome dell'abitudine"
            onChangeText={(value) => setName(value)} />
        </View>
        <View style={styles.viewGrade}>
          <Text>LOW: </Text>
          <TextInput style={styles.input} placeholder="valore + unità di misura"
            onChangeText={(value) => setLow(value)} />
        </View>
        <View style={styles.viewGrade}>
          <Text>MEDIUM: </Text>
          <TextInput style={styles.input} placeholder="valore + unità di misura"
            onChangeText={(value) => setMedium(value)} />
        </View>
        <View style={styles.viewGrade}>
          <Text>HIGH: </Text>
          <TextInput style={styles.input} placeholder="valore + unità di misura"
            onChangeText={(value) => setHigh(value)} />
        </View>
      </View>
      <View style={styles.buttonview}>
        <Button title='crea'
          onPress={() => addHabit()} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  title: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  inputHabit: {
    flex: 5,
    margin: 10,
  },
  viewName: {
    flex: 1,
  },
  viewGrade: {
    flex: 1,
    flexDirection:'row',
    alignItems:'center',
  },
  input:{
    margin: 20,
  },
  buttonview:{
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center'
  }
});



export default CreateHabit
