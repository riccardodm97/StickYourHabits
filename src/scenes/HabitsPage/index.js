import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';


function OnOpenPage(props) {
  if (props.empty) {
    return (
      <View>
        <Text>Non ci sono ancora abitudini, clicca sul + per aggiungerne una</Text>
      </View>
    );
  }
  else {
    return (
      <View>
        <Text>Ecco le tue abitudini</Text>
      </View>
    );
  }
}

// function FlatListHabits(props){
//   if()
// }



const Habits = () => {

  const [habitsList, setHabitsList] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await AsyncStorage.getItem('lista')
      if (result) {
        setItemList(JSON.parse(result));
      }

    };

    fetchData();
  }, []);

  return (
    <SafeAreaView>
      <View>
        <OnOpenPage empty={false} style={styles.openPage} />
        <FlatListHabits style={styles.flatList} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  openPage: {
    flex: 1,
  },
  flatList: {
    flex: 1,
  }
})

export default Habits


