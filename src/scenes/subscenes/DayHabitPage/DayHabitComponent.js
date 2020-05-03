import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import GradeButton from './GradeButtonComponent'

const DayHabitBox = (props) => {

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.habitName}> {props.name} </Text>
            <View style={styles.gradeButtons}>
                <GradeButton gradeString={props.low} colorGrade={{ backgroundColor: 'red' }} />
                <GradeButton gradeString={props.medium} colorGrade={{ backgroundColor: 'yellow' }} />
                <GradeButton gradeString={props.high} colorGrade={{ backgroundColor: 'green' }} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#BEBEBE',
        margin: 5
    },
    habitName: {
        color: '#000',
        fontSize: 25,
        textAlign: 'center',
    }
})

export default DayHabitBox;