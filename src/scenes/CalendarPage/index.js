import React, { useState, useEffect } from 'react'
import { View, Button, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native'
import { deleteAllHabits } from '../../dataStorage/habitsService';
import * as dateHandler from '../CalendarPage/dateHandler';
import DayComponent from '../CalendarPage/DayComponent'
import { TODAY, ITALIAN_NAMES } from '../../utils/generalVar';

const today = TODAY.clone();


const Calendar = ({ navigation }) => {
    const [month, setMonth] = useState(ITALIAN_NAMES[today.getMonth()]);
    const [currentMonthDaysArray, setCurrentMonthDaysArray] = useState(dateHandler.dayArray(today));

    const nextMonthName = () => {
        const nextMonth = dateHandler.nextMonth(today);
        const nMName = ITALIAN_NAMES[nextMonth.getMonth()];
        setCurrentMonthDaysArray(dateHandler.dayArray(nextMonth));
        setMonth(nMName);

    }
    const prevMonthName = () => {
        const prevMonth = dateHandler.prevMonth(today);
        const pMName = ITALIAN_NAMES[prevMonth.getMonth()];
        setCurrentMonthDaysArray(dateHandler.dayArray(prevMonth));
        setMonth(pMName);

    }

    useEffect(() => {
        setMonth(ITALIAN_NAMES[today.getMonth()]);
        setCurrentMonthDaysArray(dateHandler.dayArray(today));
        console.log('a')
    }, [])
    return (
        <SafeAreaView style={styles.safe}>
            <View style={styles.schermo}>
                <Text style={styles.monthNameText}> {month} </Text>
                <View style={styles.calendar}>
                    {currentMonthDaysArray.map((day) => {
                        return <DayComponent key={day.id} text={day.value} />
                    })}
                </View>
                <View style={styles.buttons}>
                    <Button title="+1" onPress={nextMonthName} />
                    <Button title="Elimina Habit" onPress={deleteAllHabits} />
                    <Button title="-1" onPress={prevMonthName} />
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
        flex: 1
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
        color: 'blue'
    },
    buttons: {
        position: 'absolute',
        bottom: 30,
        flexDirection: 'row',
        alignSelf: 'center'
    }
})
export default Calendar
