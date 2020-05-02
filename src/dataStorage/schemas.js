import Realm from 'realm';

export const HABITS_SCHEMA = 'HabitSchema';

export const HabitSchema = {
  name: HABITS_SCHEMA,
  primaryKey: 'id',
  properties: {
    id: 'string',
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

// Realm.deleteFile(databaseOptions);

export default new Realm(databaseOptions);

