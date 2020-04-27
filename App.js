import * as React from 'react';
import BottomNavBar from './src/components/bottomNavBar';
import {INITIAL_ROUTE_NAME} from './src/utils/generalVar';

//SE LA PORCO DUE DI APPLICAZIONE NON PARTE : cd android -> gradlew --refresh-dependencies
//PER TESTARE L'APP : npm run test 

export default function App() {
  return (
      <BottomNavBar initialRouteName={INITIAL_ROUTE_NAME}/>   
  );
}

