// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Header from "./screens/Header";
import Footer from "./screens/Footer";
import LoginScreen from './screens/LoginScreen';
import CocktailScreen from './screens/CocktailScreen';
import CocktailDetailScreen from './screens/CocktailDetailScreen';
import MealScreen from './screens/MealScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
  <NavigationContainer>
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: 'transparent' }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'MealScreen') {
            iconName ='food';
          } else if (route.name === 'CocktailScreen') {
            iconName = 'glass-cocktail';
          }
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: 'steelblue',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="MealScreen" component={MealScreen} />
      <Tab.Screen name="CocktailScreen" component={CocktailScreen} />
    </Tab.Navigator>
  </NavigationContainer>
  );
};
export default App;
