import React, { useState, useEffect } from 'react'
import { View, Button, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native'
import { deleteAllHabits } from '../../dataStorage/habitsService';
import * as dateHandler from '../CalendarPage/dateHandler';
import DayComponent from '../CalendarPage/DayComponent'
import { TODAY } from '../../utils/generalVar';

const today = TODAY.clone();


const Calendar = ({ navigation }) => {
    const [month, setMonth] = useState(dateHandler.getCurrentMonthName(today));

    const dayRender = (date) => {
        const days = [];
        for (let i = 1; i <= dateHandler.getNumberOfDays(date); i++) {
            days.push(
                <DayComponent text={i.toString()} />
            )
        }
        console.log('RENDERING')
        return days;
    }

    const nextMonthName = () => {
        const nextMonth = dateHandler.nextMonth(today);
        const nMName = dateHandler.getCurrentMonthName(nextMonth);
        setMonth(nMName);

    }
    const prevMonthName = () => {
        const nextMonth = dateHandler.prevMonth(today);
        const nMName = dateHandler.getCurrentMonthName(nextMonth);
        setMonth(nMName);

    }
    return (
        <SafeAreaView style={styles.safe}>
            <View style={styles.schermo}>
                <Text style={styles.monthNameText}> {month} </Text>
                <View style={styles.calendar}>
                    {dayRender(today)}
                </View>
                <Button title="+1" onPress={nextMonthName} />
                <Button title="-1" onPress={prevMonthName} />
                <Button title="Elimina Habit" onPress={deleteAllHabits} />
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
        justifyContent: 'space-between'
    },
    monthNameText: {
        textAlign: 'center',
        fontSize: 30,
        marginVertical: 30,
        color: 'blue'
    }
})
export default Calendar
