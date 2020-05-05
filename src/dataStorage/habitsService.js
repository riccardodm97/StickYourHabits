import realm from './schemas';
import { HABITS_SCHEMA } from './schemas';

export function insertNewHabit(newHabit) {
    try {
        realm.write(() => {
            realm.create(HABITS_SCHEMA, newHabit);
        })
    } catch (error) {
        console.log('error creating', newHabit,':', error);
    }
}

export function updateHabitName(habitId, newHabitName) {
    try {
        realm.write(() => {
            realm.create(HABITS_SCHEMA, { id: habitId, name: newHabitName }, true);
        })
    } catch (error) {
        console.log('error updating', newHabitName,':', error);
    }
}

export function deleteHabitById(habitId) {
    try {
        realm.write(() => {
            let deletingHabits = realm.objectForPrimaryKey(HABITS_SCHEMA, habitId)
            realm.delete(deletingHabits);
        })       
    } catch (error) {
        console.log('error deleting', habitId,':', error);
    }
}

export function getHabitById(habitId) {
    try {
        return realm.objectForPrimaryKey(HABITS_SCHEMA, habitId);
    } catch (error) {
        console.log('error fetching', habitId,':', error);
    }
}

export function getHabitByName(habitName){
    try {
        return realm.objects(HABITS_SCHEMA).filtered('name = $0',habitName);
    } catch (error) {
        console.log('error fetching', habitName,':', error);
    }
}

export function getAllHabits() {
    try {
        return realm.objects(HABITS_SCHEMA);
    } catch (error) {
        console.log('error fetching all habits:', error);
    }
}

export function deleteAllHabits() {
    try {
        realm.write(() => {
            let allHabits = realm.objects(HABITS_SCHEMA);
            realm.delete(allHabits);
        })

    } catch (error) {
        console.log('error deleting all habits:', error);
    }
}
