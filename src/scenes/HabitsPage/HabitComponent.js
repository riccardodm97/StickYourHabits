import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function Box (props){
    return (
        <View style={[styles.box,props.specificStyle]}>
            <Text style={styles.boxtext} >{props.grade}:  {props.value}</Text>
        </View>
    );
}

export default function HabitComponent(props) {
    return (
        <View style={styles.card}>
            <View style={styles.title}>
                <Text style={styles.titletext}>{props.habitName.toUpperCase()}</Text>
            </View>
            <View>
                <Box specificStyle= {{borderColor:'red'}} grade='LOW' value={props.low} />
                <Box specificStyle= {{borderColor:'yellow'}} grade='MEDIUM' value={props.medium} />
                <Box specificStyle= {{borderColor:'green'}} grade='HIGH' value={props.high} />
            </View>
        </View>
    );
}

const styles= StyleSheet.create({
    card:{
        backgroundColor:'white',
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 20,
    },
    title:{
        alignSelf:'center',
        margin:10,
    },
    titletext:{
        fontFamily:'normal',
        fontSize: 20,
        fontWeight:'bold',
        color:'black',
    },
    box:{
        marginHorizontal:10,
        marginBottom:10,
        borderRadius: 10,
        padding:5,
        borderWidth:2,
    },
    boxtext:{
        fontSize: 15,
    }

})
