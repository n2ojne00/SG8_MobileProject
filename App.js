import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ImageBackground, SafeAreaViewComponent, TouchableOpacity } from 'react-native';
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
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const SettingsIcon = ({ navigation }) => (
  <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
    <Ionicons name="settings-outline" size={24} color="#386641" style={{ marginLeft: 15 }} />
  </TouchableOpacity>
);

const CocktailStack = () => (
  <Stack.Navigator
    screenOptions={({ navigation }) => ({
      headerLeft: () => (
        navigation.canGoBack() ? (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-outline" size={24} color="#386641" style={{ marginLeft: 15 }} />
          </TouchableOpacity>
        ) : null
      ),
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Ionicons name="settings-outline" size={24} color="#386641" style={{ marginRight: 15 }} />
        </TouchableOpacity>
      ),
    })}
  >
    <Stack.Screen
      name="CocktailScreen"
      component={CocktailScreen}
      options={{ title: false }}
    />
    <Stack.Screen
      name="CocktailDetail"
      component={CocktailDetailScreen}
      options={{ title: false }}
    />
  </Stack.Navigator>
);

const MealStack = () => (
  <Stack.Navigator
    screenOptions={({ navigation }) => ({
      headerLeft: () => (
        navigation.canGoBack() ? (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-outline" size={24} color="#386641" style={{ marginLeft: 15 }} />
          </TouchableOpacity>
        ) : null
      ),
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Ionicons name="settings-outline" size={24} color="#386641" style={{ marginRight: 15 }} />
        </TouchableOpacity>
      ),
    })}
  >
    <Stack.Screen
      name="MealScreen"
      component={MealScreen}
      options={{ title: false, headerShown: true }}
    />
    <Stack.Screen
      name="MealDetail"
      component={MealDetailScreen}
      options={{ title: false }}
    />
  </Stack.Navigator>
);

const ShoppingListStack = () => (
  <Stack.Navigator
    screenOptions={({ navigation }) => ({
      headerLeft: () => (
        navigation.canGoBack() ? (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-outline" size={24} color="#386641" style={{ marginLeft: 15 }} />
          </TouchableOpacity>
        ) : null
      ),
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Ionicons name="settings-outline" size={24} color="#386641" style={{ marginRight: 15 }} />
        </TouchableOpacity>
      ),
    })}
  >
    <Stack.Screen
      name="ShoppingListScreen"
      component={ShoppingListScreen}
      options={{ title: false }}
    />
    <Stack.Screen
      name="ShoppingListDetailScreen"
      component={ShoppingListDetailScreen}
      options={{ title: false }}
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
        return <MaterialCommunityIcons name={iconName} size={30} color={color} />;
      },
      tabBarActiveTintColor: '#f67b43',
      tabBarActiveBackgroundColor: '#fbd3c038',
      tabBarInactiveTintColor: '#386641',
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
          <Stack.Navigator initialRouteName="Login"
            screenOptions={({ navigation }) => ({
              headerStyle: {
                opacity: 10,
                backgroundColor: '#c7fcfc31',
                height: 80,
              },
              headerTintColor: '#386641',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 18,
              },
              headerLeft: () => (
                navigation.canGoBack() ? (
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back-outline" size={24} color="#386641" style={{ marginLeft: 15 }} />
                  </TouchableOpacity>
                ) : null
              ),
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                  <Ionicons name="settings-outline" size={24} color="#386641" style={{ marginRight: 15 }} />
                </TouchableOpacity>
              ),
            })}>

            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="LocalLogin" component={LocalLoginScreen} options={{ title: 'Local Login' }} />
            <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Register' }} />
            <Stack.Screen name="MainApp" component={TabNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings' }} />
            <Stack.Screen name="ListDetailScreen" component={ListDetailScreen} options={{ title: false }} />
            <Stack.Screen name="PrintListScreen" component={PrintListScreen} options={{ title: false }} />
            <Stack.Screen name="CreateRecipe" component={CreateRecipeScreen} options={{ title: false }} />
            <Stack.Screen name="RecipeDetail" component={RecipeDetailScreen} options={{ title: false }} />
            <Stack.Screen name="RecipeList" component={RecipeListScreen} options={{ title: false }} />
            <Stack.Screen name="MealDetailScreen" component={MealDetailScreen} options={{ title: false }} />
            <Stack.Screen name="CocktailDetail" component={CocktailDetailScreen} options={{ title: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </RecipeProvider>

  );
};

export default App;
