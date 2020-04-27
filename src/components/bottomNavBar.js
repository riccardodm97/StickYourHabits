import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/FontAwesome';
import Calendar from '../scenes/CalendarPage/index';
import Settings from '../scenes/SettingsPage/index';
import Prog  from '../scenes/ProgPage/index';
import Habits  from '../scenes/HabitsPage/index';



Icons.loadFont()      //per far si che su iOS venga riconosciuto FontAwesome

const Tab = createBottomTabNavigator();


export default function BottomNavBar(props) {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName= {props.initialRouteName}
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
  
  