import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

/* Componente toccabile:
 * Tondo
 * Colore di bordo
 * Colore di riempimento
 * Se toccato naviga verso la pagina Abitudine
 */

const DayComponent = props => {
  return (
    <View>
      <TouchableOpacity onPress={props.onPress}>
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
    margin: 8,
    borderColor: 'black',
    borderWidth: 1
  },
  dayText: {
    color: 'white',
    fontSize: 18
  }
})

export default DayComponent;
