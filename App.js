import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ListDetailScreen from './screens/ListDetailScreen';

import { ThemeProvider } from './contexts/ThemeContext';
import { RecipeProvider } from './contexts/RecipeContext';

// Import Screens
import LoginScreen from './screens/LoginScreen';
import LocalLoginScreen from './screens/LocalLoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import MainScreen from './screens/MainScreen';
import CocktailScreen from './screens/CocktailScreen';
import CocktailDetailScreen from './screens/CocktailDetailScreen';
import MealScreen from './screens/MealScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import ShoppingListScreen from './screens/ShoppingListScreen';
import PrintListScreen from './screens/PrintListScreen';
import SettingsScreen from './screens/SettingsScreen';
import CreateRecipeScreen from './screens/CreateRecipeScreen';
import ShoppingListDetailScreen from './screens/ShoppingListDetailScreen';
import RecipeDetailScreen from './screens/RecipeDetailScreen';
import RecipeListScreen from './screens/RecipeListScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const SettingsIcon = ({ navigation }) => (
  <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
    <Ionicons name="settings-outline" size={24} color="black" style={{ marginLeft: 15 }} />
  </TouchableOpacity>
);

const CocktailStack = () => (
  <Stack.Navigator
    screenOptions={({ navigation }) => ({
      headerLeft: () => (
        navigation.canGoBack() ? (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-outline" size={24} color="black" style={{ marginLeft: 15 }} />
          </TouchableOpacity>
        ) : null
      ),
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Ionicons name="settings-outline" size={24} color="black" style={{ marginRight: 15 }} />
        </TouchableOpacity>
      ),
    })}
  >
    <Stack.Screen 
      name="CocktailScreen" 
      component={CocktailScreen} 
      options={{ title: 'Cocktail Search' }} 
    />
    <Stack.Screen 
      name="CocktailDetail" 
      component={CocktailDetailScreen} 
      options={{ title: 'Cocktail Details' }} 
    />
  </Stack.Navigator>
);

const MealStack = () => (
  <Stack.Navigator
    screenOptions={({ navigation }) => ({
      headerLeft: () => (
        navigation.canGoBack() ? (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-outline" size={24} color="black" style={{ marginLeft: 15 }} />
          </TouchableOpacity>
        ) : null
      ),
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Ionicons name="settings-outline" size={24} color="black" style={{ marginRight: 15 }} />
        </TouchableOpacity>
      ),
    })}
  >
    <Stack.Screen 
      name="MealScreen" 
      component={MealScreen} 
      options={{ title: 'Meal Search' }} 
    />
    <Stack.Screen 
      name="MealDetail" 
      component={MealDetailScreen} 
      options={{ title: 'Meal Details' }} 
    />
  </Stack.Navigator>
);

const ShoppingListStack = () => (
  <Stack.Navigator
    screenOptions={({ navigation }) => ({
      headerLeft: () => (
        navigation.canGoBack() ? (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-outline" size={24} color="black" style={{ marginLeft: 15 }} />
          </TouchableOpacity>
        ) : null
      ),
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Ionicons name="settings-outline" size={24} color="black" style={{ marginRight: 15 }} />
        </TouchableOpacity>
      ),
    })}
  >
    <Stack.Screen 
      name="ShoppingListScreen" 
      component={ShoppingListScreen} 
      options={{ title: 'Shopping List' }}
    />
    <Stack.Screen 
      name="ShoppingListDetailScreen" 
      component={ShoppingListDetailScreen} 
      options={{ title: 'Shopping List Details' }} 
    />
  </Stack.Navigator>
);

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;
        if (route.name === 'Main') {
          iconName = 'home-outline';
        } else if (route.name === 'Meals') {
          iconName = 'food-fork-drink';
        } else if (route.name === 'Cocktails') {
          iconName = 'glass-cocktail';
        } else if (route.name === 'ShoppingList') {
          iconName = 'cart-outline';
        }
        return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'steelblue',
      tabBarInactiveTintColor: 'gray',
    })}
  >
    <Tab.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
    <Tab.Screen name="Meals" component={MealStack} options={{ headerShown: false }} />
    <Tab.Screen name="Cocktails" component={CocktailStack} options={{ headerShown: false }} />
    <Tab.Screen name="ShoppingList" component={ShoppingListStack} options={{ headerShown: false }} />
  </Tab.Navigator>
);

const App = () => {
  return (
    <RecipeProvider>
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="LocalLogin" component={LocalLoginScreen} options={{ title: 'Local Login' }} />
          <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Register' }} />
          <Stack.Screen name="MainApp" component={TabNavigator} options={{ headerShown: false }} />
          <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings' }} />
          <Stack.Screen name="ListDetailScreen" component={ListDetailScreen} options={{ title: 'List Details' }} />
          <Stack.Screen name="PrintListScreen" component={PrintListScreen} options={{ title: 'Print List' }} />
          <Stack.Screen name="CreateRecipe" component={CreateRecipeScreen} options={{ title: 'Create Recipe' }} />
          <Stack.Screen name="RecipeDetail" component={RecipeDetailScreen} options={{ title: 'Recipe Details' }} />
          <Stack.Screen name="RecipeList" component={RecipeListScreen} options={{ title: 'Recipe List' }} />
          <Stack.Screen name="MealDetailScreen" component={MealDetailScreen} options={{ title: 'Meal Details' }} />
          <Stack.Screen name="CocktailDetail" component={CocktailDetailScreen} options={{ title: 'Cocktail Details' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
    </RecipeProvider>
  );
};

export default App;
