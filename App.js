// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import MainScreen from './screens/MainScreen';
import CocktailScreen from './CocktailScreen';
import CocktailDetailScreen from './CocktailDetailScreen';
import MealScreen from './screens/MealScreen';
import MealDetailScreen from './screens/MealDetailScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={MainScreen} options={{ title: 'Main Screen' }} />
        <Stack.Screen name="Cocktail" component={CocktailScreen} options={{ title: 'Cocktail Search' }} />
        <Stack.Screen name="CocktailDetail" component={CocktailDetailScreen} options={{ title: 'Cocktail Details' }} />
        <Stack.Screen name="Meal" component={MealScreen} options={{ title: 'Meal Search' }} />
        <Stack.Screen name="MealDetail" component={MealDetailScreen} options={{ title: 'Meal Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
