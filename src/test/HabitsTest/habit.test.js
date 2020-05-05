import {deleteAllHabits, updateHabitName, insertNewHabit, getHabitByName,getAllHabits} from '../../dataStorage/habitsService';
import {Habit} from '../../dataStorage/models';
import realm from '../../dataStorage/schemas'

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
  realm.close();
});

test("mi aspetto che il valore high dell'habit con name prova1 sia 3", () => {
  expect(getHabitByName('prova1')[0].high).toMatch('3');
})

test("cambio il nome dell'habit2 da prova2 a prova2b e vedo se lo ha fatto", () => {
  updateHabitName(getHabitByName('prova2')[0].id,"prova2b")
  expect(getAllHabits()[1].name).toMatch('prova2b');
})
