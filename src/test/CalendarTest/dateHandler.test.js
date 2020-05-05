import moment from 'moment';

// Importo le funzioni dal file calendarHandler
import {
  getNumberOfDays,
  getCurrentMonthAndYear,
  getCurrentMonthName,
  getNextMonth,
  getPrevMonth,
  getDayID,
  getDaysArray,
  getDayId,
} from '../../scenes/CalendarPage/dateHandler';

import {TODAY} from '../../utils/generalVar';

const today = TODAY;

test('Test: Maggio 31, mi aspetto 31', () => {
  const t = getCurrentMonthAndYear();
  expect(getNumberOfDays(t)).toBe(31);
});

test('Test: Febbraio 01 2020, mi aspetto 29', () => {
  const febr = { month: 2, year: 2020};
  expect(getNumberOfDays(febr)).toBe(29);
})

test('Test: Giugno 06 2020, mi aspetto 06 2020', () => {
  const t = getCurrentMonthAndYear();
  expect(getNextMonth(t).month).toMatch("6");
  expect(getNextMonth(t).year).toMatch("2020");

})

test('Test: Aprile 04 2020, mi aspetto 04 2020', () => {
  const t = getCurrentMonthAndYear();
  expect(getPrevMonth(t).month).toMatch("4");
  expect(getPrevMonth(t).year).toMatch("2020");

})

test('Test: Febbraio 02 2020, mi aspetto 02 2020', () => {
  let t = getCurrentMonthAndYear();
  t = getPrevMonth(t);
  t = getPrevMonth(t);
  expect(getPrevMonth(t).month).toMatch("2");
  expect(getPrevMonth(t).year).toMatch("2020");

})

test('Test: voglio un array lungo 29 (29 giorni)', () => {
  let t = getCurrentMonthAndYear();
  t = getPrevMonth(t);
  t = getPrevMonth(t);
  t = getPrevMonth(t);
  const days = getDaysArray(t);
  expect(days.length).toBe(29);
  expect(getDayId(t, days[4].number)).toMatch("2020-2-5");
})
