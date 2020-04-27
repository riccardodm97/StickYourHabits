import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function Box (props){
    return (
        <View style={[styles.box,props.bordercolor]}>
            <Text>{props.grade}:  {props.value}</Text>
        </View>
    );
}

export default function HabitComponent(props) {
    return (
        <View style={styles.card}>
            <View style={styles.title}>
                <Text style={styles.titletext}>{props.HabitName}</Text>
            </View>
            <View>
                <Box bordercolor= {{borderColor:'red',borderWidth:2}} grade='LOW' value={props.low} />
                <Box bordercolor= {{borderColor:'yellow',borderWidth:2}} grade='MEDIUM' value={props.medium} />
                <Box bordercolor= {{borderColor:'green',borderWidth:2}} grade='HIGH' value={props.high} />
            </View>
        </View>
    );
}

const styles= StyleSheet.create({
    card:{
        backgroundColor:'grey',
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
        fontSize: 14,
        fontWeight:'bold',
        color:'red',
    },
    box:{
        marginHorizontal:10,
        marginBottom:10,
        borderRadius: 10,
        padding:5,
    },

})
