import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

/* Componente toccabile:
 * Tondo
 * Colore di bordo
 * Colore di riempimento
 * Se toccato naviga verso la pagina Abitudine
 */

const DayComponent = props => {
  return (
    <View style={styles.dayButton}>
      <TouchableOpacity>
        <Text> {props.text} </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  dayButton: {
    height: 50,
    width: 50,
    borderRadius: 100,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8 
  }
})

export default DayComponent;
