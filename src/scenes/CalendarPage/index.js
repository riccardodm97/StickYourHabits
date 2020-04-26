import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, Button, StyleSheet, FlatList, SafeAreaView } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';



const Calendar = ({ navigation }) => {

    const [itemList, setItemList] = useState([])
    const [item, setItem] = useState('')


    function handleTextChange(itemValue) {
        setItem(itemValue)

    }

    function addToItemList(item) {
        setItemList((prevItemList) => [...prevItemList, item])
        console.log('inviata stringa', item)


    }

    async function clearItemList() {
        itemList.length = 0
        setItemList([])
        await saveItemList()
        console.log('pulita lista')
    }

    async function saveItemList() {

        AsyncStorage.setItem('lista', JSON.stringify(itemList))
        console.log('salvato')
    }

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
        <SafeAreaView style={styles.safe}>
            <View style={styles.schermo}>
                <View style={styles.view1}>
                    <TextInput style={styles.input} placeholder='inserisci stringa'
                        onChangeText={(value) => handleTextChange(value)}
                    />
                    <View style={styles.buttonview}>
                        <Button title='invio'
                            onPress={() => addToItemList(item)} />
                    </View>
                </View>
                <View style={styles.view2}>
                    <FlatList
                        keyExtractor={(item) => item}
                        data={itemList}
                        renderItem={
                            (itemdata) => (
                                <Text>{itemdata.item}</Text>
                            )
                        }
                    />
                </View>
                <View style={styles.view3}>
                    <Button title='vai a abitudini'
                        onPress={() => navigation.navigate('Abitudini')} />
                </View>
                <View style={styles.view4}>
                    <Button title='salva'
                        onPress={saveItemList} />
                    <Button title='clear'
                        onPress={clearItemList} />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safe:{
        flex:1
    },
    schermo: {
        flex: 1
    },
    view1: {
        flex: 1,
        flexDirection: "row",
    },
    input: {
        flex: 8,
        borderColor: 'black',
        borderWidth: 3,
        paddingLeft: 20,
        marginLeft: 10,
        marginTop: 10,
    },
    buttonview: {
        flex: 2,
        alignSelf: 'center',
        marginHorizontal: 10,

    },
    view2: {
        flex: 7,

    },
    view3: {
        flex: 1,
        alignContent: 'center'
    },
    view4: {
        flex: 1,
        paddingHorizontal: 50,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 20,
    }


})
export default Calendar