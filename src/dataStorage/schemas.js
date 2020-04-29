import Realm from 'realm';

export const HABITS_SCHEMA = 'HabitSchema';

export const HabitSchema = {
  name: HABITS_SCHEMA,
  primaryKey: 'id',
  properties: {
    id: 'int',
    name: 'string',
    low: 'string',
    medium: 'string',
    high: 'string',
  },
};

const databaseOptions = {
  path: Realm.defaultPath,
  schema: [HabitSchema],
  schemaVersion: 0, //optional , ci serve?
};

export default new Realm(databaseOptions);
