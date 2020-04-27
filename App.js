import * as React from 'react';
import BottomNavBar from './src/components/bottomNavBar'

//SE LA PORCO DUE DI APPLICAZIONE NON PARTE : cd android -> gradlew --refresh-dependencies


export default function App() {
  return (
      <BottomNavBar initialRouteName={'Calendario'}/>   
  );
}

