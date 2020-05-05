import moment from 'moment';
import {TODAY} from '../../utils/generalVar';

const today = TODAY;

function monthAndYearToString(dateObj){
  return dateObj.year + "-" + dateObj.month;
}

function createDateObj(base) {
  return {
    month: base.format('M'),
    year: base.format('YYYY'),
  }
}

export function getCurrentMonthAndYear(){
  return createDateObj(today);
}

export function getNumberOfDays(dateObj) {
  const date = monthAndYearToString(dateObj);
  return moment(date, "YYYY-MM").daysInMonth();
}

export function getNextMonth(dateObj) {
  const selectedDate = moment(monthAndYearToString(dateObj), "YYYY-MM");
  const nextMonth = selectedDate.add(1, 'month');
  return createDateObj(nextMonth);
}

export function getPrevMonth(dateObj) {
  const selectedDate = moment(monthAndYearToString(dateObj), "YYYY-MM");
  const prevMonth = selectedDate.subtract(1, 'month');
  return createDateObj(prevMonth);
}

export function getDayId(dateObj, numDay) {
  return dateObj.year + "-" + dateObj.month + "-" + numDay;
}

export function getDaysArray(dateObj) {
  const days = [];
  for(let i = 1; i <= getNumberOfDays(dateObj); i++) {
    const day = {
      id: getDayId(dateObj, i),
      number: i,
    }

    days.push(day);
  }

  return days;
}