import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import GradeButton from './GradeButtonComponent'

const DayHabitBox = (props) => {

    return(
        <View style={styles.mainContainer}>
            <Text> {props.name} </Text>
            <View style={styles.gradeButtons}>
               <GradeButton gradeString={props.low}/> 
               <GradeButton gradeString={props.medium}/> 
               <GradeButton gradeString={props.high}/> 
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
       backgroundColor: 'pink',
       margin: 5 
    },
    gradeButtons: {
    }
})

export default DayHabitBox;