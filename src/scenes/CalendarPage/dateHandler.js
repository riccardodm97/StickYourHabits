import moment from 'moment';
import {TODAY} from '../../utils/generalVar';

const today = TODAY;

function monthAndYearToString(dateObj){
  return dateObj.year + "-" + dateObj.month;
}

export function getCurrentMonthAndYear(){
  return { 
    month: today.format('M'),
    year : today.format('YYYY'),
  }
}

export function getNumberOfDays(dateObj) {
  const date = monthAndYearToString(dateObj);
  return moment(date, "YYYY-MM").daysInMonth();
}

export function nextMonth(dateObj) {
  const currentDate = moment(monthAndYearToString(dateObj), "YYYY-MM");
  const nextMonth = currentDate.add(1, 'month');
  return {
    month: nextMonth.format('M'),
    year:  nextMonth.format('YYYY'),
  }
}