import React, { useState} from 'react'
import { View, Button, Text, StyleSheet, SafeAreaView } from 'react-native'
import { deleteAllHabits } from '../../dataStorage/habitsService';
import * as dateHandler from '../CalendarPage/dateHandler';
import DayComponent from '../CalendarPage/DayComponent'
import { ITALIAN_NAMES } from '../../utils/generalVar';



const Calendar = ({ navigation }) => {
    
    const [dateObj, setDateObj] = useState(dateHandler.getCurrentMonthAndYear());

    const clickHandler = (changedDate) => {
        setDateObj(changedDate);
    }

    return (
        <SafeAreaView style={styles.safe}>
            <View style={styles.schermo}>
                <Text style={styles.monthNameText}> {ITALIAN_NAMES[dateObj.month]} {dateObj.year} </Text>
                <View style={styles.calendar}>
                    {dateHandler.getDaysArray(dateObj).map((day) => {
                        return <DayComponent key={day.id} text={day.number} id={day.id}/>
                    })}
                </View>
                <View style={styles.buttons}>
                    <Button title="-1" onPress={() =>clickHandler(dateHandler.getPrevMonth(dateObj))} />
                    <Button title="Elimina Habit" onPress={deleteAllHabits} />
                    <Button title="+1" onPress={() =>clickHandler(dateHandler.getNextMonth(dateObj))} />

                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safe: {
        flex: 1
    },
    schermo: {
        flex: 1,
    },
    calendar: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',

    },
    monthNameText: {
        textAlign: 'center',
        fontSize: 30,
        marginVertical: 30,
    },
    buttons: {
        position: 'absolute',
        bottom: 30,
        flexDirection: 'row',
        alignSelf: 'center'
    }
})
export default Calendar
