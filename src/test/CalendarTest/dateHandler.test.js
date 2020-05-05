import moment from 'moment';

// Importo le funzioni dal file calendarHandler
import {
  getNumberOfDays,
  getCurrentMonthAndYear,
  nextMonthCloning,
  prevMonthCloning,
  getCurrentMonthName,
  nextMonth,
  prevMonth,
  getDayID,
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
test('Test: Giugno 05 2020, mi aspetto 05 2020', () => {
  const t = getCurrentMonthAndYear();
  expect(nextMonth(t).month).toMatch("6");
  expect(nextMonth(t).year).toMatch("2020");

})
