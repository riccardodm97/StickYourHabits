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
  getDayID,
} from '../../scenes/CalendarPage/dateHandler';

// Test per verificare se il numero di giorni del mese corrente è giusto
test('Il valore di ritorno del numero di giorni del mese corrente dovrebbe essere 30', () => {
  const today = XDate();
  expect(getNumberOfDays(today)).toBe(31);
});

// Mese corrente 3, valore di ritorno 3
test('Mese corrente 4, valore di ritorno 4', () => {
  expect(getCurrentMonth()).toBe(4);
});

// Mese corrente 3, prossimo mese 4. Mi aspetto 4 come valore di ritorno dalla funzione nextMonth
test('Mese corrente 4, prossimo mese deve essere 5', () => {
  expect(nextMonthCloning().getMonth()).toBe(5);
});

// Mese corrente 3, prossimo mese 2. Mi aspetto 2 come valore di ritorno dalla funzione prevMonth
test('Mese corrente 4, mese precedente deve essere 3', () => {
  expect(prevMonthCloning().getMonth()).toBe(3);
});

// Ritorna il numero di giorni del prossimo mese
test('Mese corrente 4 con numero di giorni 31, prossimo mese 5 numero di giorni 30', () => {
  const nMonth = nextMonthCloning();
  expect(nMonth.getMonth()).toBe(5);
  expect(getNumberOfDays(nMonth)).toBe(30);
});

// Ritorna il numero di giorni del mese precedente
test('Mese corrente 4 con numero di giorni 31, mese precedente 3 numero di giorni 30', () => {
  const pMonth = prevMonthCloning();
  expect(pMonth.getMonth()).toBe(3);
  expect(getNumberOfDays(pMonth)).toBe(30);
});

// Ritorna il nome del mese corrente
test('Nome del mese corrente May mi aspetto May', () => {
  const today = XDate();
  expect(getCurrentMonthName(today)).toMatch('May');
});

// Ritorna il nome del prossimo mese
test('Nome prossimo mese Jun, mi aspetto Jun', () => {
  const nMonth = nextMonthCloning();
  expect(getCurrentMonthName(nMonth)).toMatch('Jun');
});

// Ritorna il nome del mese precedente
test('Nome mese precedente April, mi aspetto April', () => {
  const pMonth = prevMonthCloning();
  expect(getCurrentMonthName(pMonth)).toMatch('April');
});

// Test per vedere se getDaysInMonth funziona per febbraio bisestile e non
test('Febbraio bisestile n giorni 29, non bisestile 28. Mi aspetto 28, 29', () => {
  const febrBisestile = XDate(2020, 1);
  const febrNonBisestile = XDate(2021, 1);
  expect(getNumberOfDays(febrBisestile)).toBe(29);
  expect(getNumberOfDays(febrNonBisestile)).toBe(28);
});

// Test con l'oggetto Date che cambia dinamicamente (senza clone)

test('Mese corrente 4 mese successivo 5, mi aspetto 5', () => {
  expect(nextMonth().getMonth()).toBe(5);
});

test('Ora il mese corrente è 5 e quindi mese successivo 4, mi aspetto 4', () => {
  expect(prevMonth().getMonth()).toBe(4);
});

test('Crea un ID nel formato YYYYMMdd. Dato today come giorno mi aspetto 20200502', () => {
  const today = XDate();
  expect(getDayID(today)).toBe(20200502);
})
