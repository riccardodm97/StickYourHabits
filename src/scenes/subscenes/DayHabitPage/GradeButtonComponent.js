import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GradeButton = (props) => {

    return (
        <View style={[styles.gradeButtons, props.colorGrade]}>
            <TouchableOpacity disabled={props.disabled} onPress={props.onPress}>
                <View>
                    <Text style={{fontSize: 25}}> { props.gradeString } </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    gradeButtons: {
        backgroundColor:'white',
        margin: 3
    }
})

export default GradeButton;