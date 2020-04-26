import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/dist/FontAwesome';
import Calendar from './src/scenes/CalendarPage/index';
import Settings from './src/scenes/SettingsPage/index';
import Prog  from './src/scenes/ProgPage/index';
import Habits  from './src/scenes/HabitsPage/index';

// In attesa di trovare soluzione va tenuto.
// Questo serve per far si che su iOS venga riconosciuto FontAwesome
Icons.loadFont()


const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Calendario'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Progressi') {
              iconName = 'bar-chart'
            } else if (route.name === 'Calendario') {
              iconName = 'calendar'
            } else if (route.name === 'Abitudini'){
              iconName = 'check-circle'
            }else if(route.name === 'Impostazioni'){
              iconName = 'cog'
            }

            // You can return any component that you like here!
            return <Icons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#49a6c8',
          inactiveTintColor: 'gray',
        }}
      >

        <Tab.Screen
          name="Progressi"
          component={Prog}
        />
        <Tab.Screen
          name="Calendario"
          component={Calendar}

        />
        <Tab.Screen
          name="Abitudini"
          component={Habits}
        />
        <Tab.Screen
          name="Impostazioni"
          component={Settings}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

