import realm from './schemas';
import {HABITS_SCHEMA} from './schemas';

export function insertNewHabit (newHabit) {
    try {
        realm.write(()=>{
            realm.create(HABITS_SCHEMA,newHabit);
        })
    } catch (error) {
        console.log('error creating', newHabit);
    }
}

export function updateHabitName (habitId, newHabitName) {
    try {
        realm.write(()=>{
            realm.create(HABITS_SCHEMA,{id: habitId, name: newHabitName},true);
        })
    } catch (error) {
        console.log('error updating', newHabit);
    }
}

export function deleteHabit (habitId) {
    try {
        let deletingHabits = realm.objectForPrimaryKey(HABITS_SCHEMA, habitId)
        realm.delete(deletingHabits);
    } catch (error) {
        console.log('error deleting', habitName);
    }
}

export function getHabit (habitId) {
    try {
        let habit = realm.objectForPrimaryKey(HABITS_SCHEMA,habitId)
        return habit;
    } catch (error) {
        console.log('error deleting', habitName);
    }
}

export function getAllHabits () {
    try {
        return realm.objects(HABITS_SCHEMA);
    } catch (error) {
        console.log('error fetching all habits');
    }
}

export function deleteAllHabits () {
    try {
        let allHabits = realm.objects(HABITS_SCHEMA);
        realm.delete(allHabits);
    } catch (error) {
        
    }
}