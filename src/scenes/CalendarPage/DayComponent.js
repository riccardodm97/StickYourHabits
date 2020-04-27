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
    <View>
      <TouchableOpacity>
        <Text> Ciao </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DayComponent;
