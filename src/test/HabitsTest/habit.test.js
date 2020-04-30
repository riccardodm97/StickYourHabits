import {deleteAllHabits, updateHabitName, insertNewHabit, getHabit} from '../../dataStorage/habitsService';

const habit1 = {
  id: '1',
  name: 'prova1',
  low: '1',
  medium: '2',
  high: '3',
}
const habit2 = {
  id: '2',
  name: 'prova2',
  low: '1',
  medium: '2',
  high: '3',
}
const habit3 = {
  id: '3',
  name: 'prova3',
  low: '1',
  medium: '2',
  high: '3',
}
const habit4 = {
  id: '4',
  name: 'prova4',
  low: '1',
  medium: '2',
  high: '3',
}
const habit5 = {
  id: '5',
  name: 'prova5',
  low: '1',
  medium: '2',
  high: '3',
}

beforeAll(() => {
  insertNewHabit(habit1);
  insertNewHabit(habit2);
  insertNewHabit(habit3);
  insertNewHabit(habit4);
  insertNewHabit(habit5);
});

afterAll(() => {
  deleteAllHabits();
});

test('habit1 name prova1, risultato atteso prova1', () => {
  expect(getHabit(1).name).toMatch('prova1');
})
