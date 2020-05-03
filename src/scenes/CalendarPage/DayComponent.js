import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

/* Componente toccabile:
 * Tondo
 * Colore di bordo
 * Colore di riempimento
 * Se toccato naviga verso la pagina di quel giorno
 */

//function to handle click on DayComponent
const clickHandler = (navigation) => {

  navigation.navigate('Abitudini Del Giorno');
  console.log('Sto navigando')
}

const DayComponent = props => {
  return (
    <View>
      <TouchableOpacity onPress={() => clickHandler(props.navigation)}>
        <View style={styles.dayButton}>
          <Text style={styles.dayText}> {props.text} </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  dayButton: {
    height: 50,
    width: 50,
    borderRadius: 100,
    backgroundColor: '#49a6c8',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
    marginVertical: 10,
    borderColor: 'black',
    borderWidth: 1
  },
  dayText: {
    color: 'white',
    fontSize: 18
  }
})

export default DayComponent;
