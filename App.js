import React from 'react';
import { View } from 'react-native';
import { Calendar } from 'react-native-calendars';


const App = () => {
  return(
    <View>
      <Calendar
  // Collection of dates that have to be marked. Default = {}
  markedDates={{
    '2020-04-16': {selected: true, marked: true, selectedColor: 'blue'},
    '2020-04-17': {marked: true},
    '2020-04-18': {marked: true, dotColor: 'red', activeOpacity: 0},
    '2020-04-19': {disabled: true, disableTouchEvent: true}
  }}
/>
    </View>
  );
}

export default App;