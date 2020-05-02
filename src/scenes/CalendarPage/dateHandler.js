import XDate from 'xdate';
import {TODAY} from '../../utils/generalVar'; 
/*
 * FUNZIONI
 * Ho un oggetto che rappresenta la data corrente e uso quello come punto di partenza.
 * Mi serve:
 * Sapere quanti giorni ha il mese corrente;
 * Il nome del mese corrente
 * Devo poter conoscere anche l'anno ma non lo devo visualizzare
 *
 * Se l'utente va al mese successivo devo sapere il numero di giorni del mese successivo
 * stessa cosa precedente
 */

const today = TODAY

export function getNumberOfDays(date) {
  return XDate.getDaysInMonth(date.getFullYear(), date.getMonth());
}

export function getCurrentMonth(date) {
  return date.getMonth();
}

// Queste due funzioni permettono di mantenere today invariato creando
// una copia dell'oggetto e lavorando su quella.
export function nextMonthCloning() {
  let nMonth = today.clone();
  return nMonth.addMonths(1, true);
}

export function prevMonthCloning() {
  let pMonth = today.clone();
  return pMonth.addMonths(-1, true);
}

export function getCurrentMonthName(date) {
  return date.toString('MMMM');
}

// Funzioni che consentono di variare today per la sessione corrente
export function nextMonth(date) {
  return date.addMonths(1, true);
}

export function prevMonth(date) {
  return date.addMonths(-1, true);
}

export function getDayID(date) {
  const stringId = date.toString('yyyyMMdd');
  return parseInt(stringId, 10);
}