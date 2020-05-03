import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icons from 'react-native-vector-icons/FontAwesome';
import Calendar from '../scenes/CalendarPage/index';
import Settings from '../scenes/SettingsPage/index';
import Prog from '../scenes/ProgPage/index';
import Habits from '../scenes/HabitsPage/index';
import CreateHabit from '../scenes/subscenes/CreateHabitPage/index'
import DayHabits from '../scenes/subscenes/DayHabitPage';


Icons.loadFont()      //per far si che su iOS venga riconosciuto FontAwesome


const HabitsStack = createStackNavigator();

function HabitsStackPage() {
  return (
    <HabitsStack.Navigator initialRouteName={"Abitudini"} >
      <HabitsStack.Screen name="Abitudini" component={Habits} />
      <HabitsStack.Screen name="Crea Nuova Abitudine" component={CreateHabit} />
    </HabitsStack.Navigator>
  );
}


function CalendarStackPage() {
  return (
    <HabitsStack.Navigator initialRouteName={"Calendario"} >
      <HabitsStack.Screen name="Calendario" component={Calendar} />
      <HabitsStack.Screen name="Abitudini Del Giorno" component={DayHabits} />
    </HabitsStack.Navigator>
  );
}



const Tab = createBottomTabNavigator();

function BottomNavBar(navBarProps) {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={navBarProps.initialRouteName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Progressi') {
              iconName = 'bar-chart'
            } else if (route.name === 'Calendario') {
              iconName = 'calendar'
            } else if (route.name === 'Abitudini') {
              iconName = 'check-circle'
            } else if (route.name === 'Impostazioni') {
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
          component={CalendarStackPage}

        />
        <Tab.Screen
          name="Abitudini"
          component={HabitsStackPage}
        />
        <Tab.Screen
          name="Impostazioni"
          component={Settings}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}


export default function Navigation(props) {
  return (
    <BottomNavBar initialRouteName={props.initialRouteName} />
  );
}

