import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icons from 'react-native-vector-icons/FontAwesome';
import DaySchedule from '../scenes/DaySchedulePage/index';
import Calendar from '../scenes/CalendarPage/index';
import Habits from '../scenes/HabitsPage/index';
import Settings from '../scenes/SettingsPage/index';
import CreateHabit from '../scenes/subscenes/CreateHabitPage/index'
import Header from './header'

Icons.loadFont()      //per far si che su iOS venga riconosciuto FontAwesome



const DayScheduleStack = createStackNavigator();

function TabDayScheduleStack() {
  return (
    <DayScheduleStack.Navigator >
      <DayScheduleStack.Screen name="Oggi" component={DaySchedule} />
    </DayScheduleStack.Navigator>
  );
}

const CalendarStack = createStackNavigator();

function TabCalendarStack() {
  return (
    <CalendarStack.Navigator >
      <CalendarStack.Screen name="Calendario" component={Calendar} />
    </CalendarStack.Navigator>
  );
}

const HabitsStack = createStackNavigator();

function TabHabitsStack() {
  return (
    <HabitsStack.Navigator>
      <HabitsStack.Screen name="Abitudini" component={Habits} />
      <HabitsStack.Screen name="Crea Nuova Abitudine" component={CreateHabit} />
    </HabitsStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();

function TabSettingsStack() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Impostazioni" component={Settings} />
    </SettingsStack.Navigator>
  );
}



const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName='Oggi'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Oggi') {
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
        name="Oggi"
        component={TabDayScheduleStack}
      />
      <Tab.Screen
        name="Calendario"
        component={TabCalendarStack}

      />
      <Tab.Screen
        name="Abitudini"
        component={TabHabitsStack}
      />
      <Tab.Screen
        name="Impostazioni"
        component={TabSettingsStack}
      />

    </Tab.Navigator>
  );
}



const RootStack = createStackNavigator();

function RootStackPage() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name='TabNavigator'
          component={TabNavigator}
          options={({ navigation, route }) => ({
            header: () => {
              return <Header navigation={navigation} route={route}/>
            }
          })
       }
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default function Navigation() {
  return (
    <RootStackPage />
  );
}

