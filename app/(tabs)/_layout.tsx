
import { Tabs } from 'expo-router';
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function TabLayout() {
  return (
  <Tabs
    screenOptions={{
        tabBarActiveTintColor: '#5087d4',
        headerStyle:{
        backgroundColor:'#1B1F4A',
        },
        headerShadowVisible: false,
        headerTintColor:'#fff',
        tabBarStyle:{
        backgroundColor:'#1B1F4A',
        },

    }}
    >
    <Tabs.Screen 
    name="index"
    options={{
        title: 'Home',
        tabBarIcon: ({ color, focused}) => (
            <Ionicons name={focused ? 'moon' : 'moon-outline'} color={color} size={24} />
        ),
    }}
    />
    <Tabs.Screen
    name="about"
    options={{
        title: 'About',
        tabBarIcon: ({ color, focused}) =>  (
           <Ionicons name={focused ? 'settings' : 'settings-outline'} color={color} size={24}/> 
        ),
    }}
    />

<Tabs.Screen
    name="toDoList"
    options={{
        title: 'Discoveries',
        tabBarIcon: ({ color, focused}) =>  (
           <AntDesign
             name={focused ? 'circledown' : 'circledowno'} color={color} size={24}/> 
    }}
    />
  </Tabs>
  );
}
