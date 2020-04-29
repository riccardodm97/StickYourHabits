import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddHabit = props => {
  return (
    <View style={props.style}>
      <TouchableOpacity onPress={props.onPress}>
        <View style={[props.buttonStyle, styles.addButton]}>
          <Icon name="plus" color="white" size={35} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  addButton: {
    width: 70,
    height: 70,
    borderRadius: 140,
    backgroundColor: '#49a6c8', // Il colore va preso dal file colors
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AddHabit;
