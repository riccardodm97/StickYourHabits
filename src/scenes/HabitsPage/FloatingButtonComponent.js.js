import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


clickHandler = (navigation) => {
  
  //function to handle click on floating Action Button
  navigation.navigate("Crea Nuova Abitudine")
  console.log('Floating Button Clicked');
};

function AddHabitButton  (props) {

  return (
    <View>   
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={()=> clickHandler(props.navigation)}
        disabled={props.disabled}
        style={!props.disabled ? styles.TouchableOpacityStyle : [styles.TouchableOpacityStyle,{borderColor:'grey'}]}>
        <Icon name="plus" color={!props.disabled ? "#49a6c8" : 'grey'} size={23} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  TouchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 50,
    backgroundColor: 'white',
    borderRadius: 30,
    borderColor:'#49a6c8',
    borderWidth: 1,
  },
});

export default AddHabitButton;

