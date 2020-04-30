import {deleteAllHabits, updateHabitName, insertNewHabit, getHabit} from '../../dataStorage/habitsService';
import {Habit} from '../../dataStorage/models';


const habit1 = new Habit('prova1','1','2','3');

const habit2 = new Habit('prova2','ciao1','ciao2','ciao3');

const habit3 = new Habit('prova3','cane','gatto','palma');

const habit4 = new Habit('prova4','3','2','1');

const habit5 = new Habit('prova5','abc','def','ghi');




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

test('habit2: name prova2 , risultato atteso ciao3', () => {
    expect(getHabit(2).high).toMatch('ciao3');
})
