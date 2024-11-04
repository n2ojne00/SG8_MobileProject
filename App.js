// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import CocktailScreen from './CocktailScreen';
import CocktailDetailScreen from './CocktailDetailScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Cocktail" component={CocktailScreen} options={{ title: 'Cocktail Search' }} />
        <Stack.Screen name="CocktailDetail" component={CocktailDetailScreen} options={{ title: 'Cocktail Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
