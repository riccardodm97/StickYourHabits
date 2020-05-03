import React, { useState, useEffect } from 'react'
import { View, Button, Text, StyleSheet, SafeAreaView } from 'react-native'
import { deleteAllHabits } from '../../dataStorage/habitsService';
import * as dateHandler from '../CalendarPage/dateHandler';
import DayComponent from '../CalendarPage/DayComponent'
import { TODAY, ITALIAN_NAMES } from '../../utils/generalVar';

const today = TODAY.clone();


const Calendar = ({ navigation }) => {
    
    const [month, setMonth] = useState(ITALIAN_NAMES[today.getMonth()]);
    const [year, setYear] = useState(today.getFullYear());
    const [currentMonthDaysArray, setCurrentMonthDaysArray] = useState(dateHandler.dayArray(today));

    const nextMonthName = () => {
        const nextMonth = dateHandler.nextMonth(today);
        const nMName = ITALIAN_NAMES[nextMonth.getMonth()];
        setCurrentMonthDaysArray(dateHandler.dayArray(nextMonth));
        setYear(nextMonth.getFullYear())
        setMonth(nMName);
    }

    const prevMonthName = () => {
        const prevMonth = dateHandler.prevMonth(today);
        const pMName = ITALIAN_NAMES[prevMonth.getMonth()];
        setCurrentMonthDaysArray(dateHandler.dayArray(prevMonth));
        setYear(prevMonth.getFullYear())
        setMonth(pMName);
    }

    useEffect(() => {
        setMonth(ITALIAN_NAMES[today.getMonth()]);
        setYear(today.getFullYear());
        setCurrentMonthDaysArray(dateHandler.dayArray(today));
    }, [])
    return (
        <SafeAreaView style={styles.safe}>
            <View style={styles.schermo}>
                <Text style={styles.monthNameText}> {month} {year} </Text>
                <View style={styles.calendar}>
                    {currentMonthDaysArray.map((day) => {
                        return <DayComponent key={day.id} text={day.value} id={day.id}/>
                    })}
                </View>
                <View style={styles.buttons}>
                    <Button title="-1" onPress={prevMonthName} />
                    <Button title="Elimina Habit" onPress={deleteAllHabits} />
                    <Button title="+1" onPress={nextMonthName} />

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
