import * as React from 'react';
import Navigation from './src/components/navigation';
import {INITIAL_ROUTE_NAME} from './src/utils/generalVar';

//SE LA PORCO DUE DI APPLICAZIONE NON PARTE : cd android -> gradlew --refresh-dependencies
//PER TESTARE L'APP : npm run test
//PER ELIMINARE DEPENDECIES : npm uninstall nomedependencie
//PER PULIRE LA CACHE : npx react-native start --reset-cache

export default function App() {
  return (
      <Navigation/>   
  );
}

