// Importo XDate per creare istanze direttamente nei test
import XDate from 'xdate';

// Importo le funzioni dal file calendarHandler
import {
  getNumberOfDays,
  getCurrentMonth,
  nextMonthCloning,
  prevMonthCloning,
  getCurrentMonthName,
  nextMonth,
  prevMonth,
} from '../../scenes/CalendarPage/dateHandler';

// Test per verificare se il numero di giorni del mese corrente è giusto
test('Il valore di ritorno del numero di giorni del mese corrente dovrebbe essere 30', () => {
  const today = XDate();
  expect(getNumberOfDays(today)).toBe(30);
});

// Mese corrente 3, valore di ritorno 3
test('Mese corrente 3, valore di ritorno 3', () => {
  expect(getCurrentMonth()).toBe(3);
});

// Mese corrente 3, prossimo mese 4. Mi aspetto 4 come valore di ritorno dalla funzione nextMonth
test('Mese corrente 3, prossimo mese deve essere 4', () => {
  expect(nextMonthCloning().getMonth()).toBe(4);
});

// Mese corrente 3, prossimo mese 2. Mi aspetto 2 come valore di ritorno dalla funzione prevMonth
test('Mese corrente 3, mese precedente deve essere 2', () => {
  expect(prevMonthCloning().getMonth()).toBe(2);
});

// Ritorna il numero di giorni del prossimo mese
test('Mese corrente 3 con numero di giorni 30, prossimo mese 4 numero di giorni 31', () => {
  const nMonth = nextMonthCloning();
  expect(nMonth.getMonth()).toBe(4);
  expect(getNumberOfDays(nMonth)).toBe(31);
});

// Ritorna il numero di giorni del mese precedente
test('Mese corrente 3 con numero di giorni 30, mese precedente 2 numero di giorni 31', () => {
  const pMonth = prevMonthCloning();
  expect(pMonth.getMonth()).toBe(2);
  expect(getNumberOfDays(pMonth)).toBe(31);
});

// Ritorna il nome del mese corrente
test('Nome del mese corrente April mi aspetto April', () => {
  const today = XDate();
  expect(getCurrentMonthName(today)).toMatch('April');
});

// Ritorna il nome del prossimo mese
test('Nome prossimo mese May, mi aspetto May', () => {
  const nMonth = nextMonthCloning();
  expect(getCurrentMonthName(nMonth)).toMatch('May');
});

// Ritorna il nome del mese precedente
test('Nome mese precedente March, mi aspetto March', () => {
  const pMonth = prevMonthCloning();
  expect(getCurrentMonthName(pMonth)).toMatch('March');
});

// Test per vedere se getDaysInMonth funziona per febbraio bisestile e non
test('Febbraio bisestile n giorni 29, non bisestile 28. Mi aspetto 28, 29', () => {
  const febrBisestile = XDate(2020, 1);
  const febrNonBisestile = XDate(2021, 1);
  expect(getNumberOfDays(febrBisestile)).toBe(29);
  expect(getNumberOfDays(febrNonBisestile)).toBe(28);
});

// Test con l'oggetto Date che cambia dinamicamente (senza clone)

test('Mese corrente 3 mese successivo 4, mi aspetto 4', () => {
  expect(nextMonth().getMonth()).toBe(4);
});

test('Ora il mese corrente è 4 e quindi mese successivo 3, mi aspetto 3', () => {
  expect(prevMonth().getMonth()).toBe(3);
});
