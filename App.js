import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import ShoppingListDetailScreen from './screens/ShoppingListDetailScreen'; // Import the new detail screen
import ListDetailScreen from './screens/ListDetailScreen'; // Import ListDetailScreen
import { ThemeProvider } from './contexts/ThemeContext';

// Import your screens
import LoginScreen from './screens/LoginScreen';
import MainScreen from './screens/MainScreen';
import CocktailScreen from './screens/CocktailScreen';
import CocktailDetailScreen from './screens/CocktailDetailScreen';
import MealScreen from './screens/MealScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import ShoppingListScreen from './screens/ShoppingListScreen';
import PrintListScreen from './screens/PrintListScreen'; // Import the PrintListScreen
import SettingsScreen from './screens/SettingsScreen';

// Create stack and tab navigators
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Helper function for the settings icon
const SettingsIcon = ({ navigation }) => (
  <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
    <Ionicons name="settings-outline" size={24} color="black" style={{ marginLeft: 15 }} />
  </TouchableOpacity>
);

const CocktailStack = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="CocktailScreen" 
      component={CocktailScreen} 
      options={({ navigation }) => ({
        title: 'Cocktail Search',
        headerLeft: () => <SettingsIcon navigation={navigation} />
      })} 
    />
    <Stack.Screen 
      name="CocktailDetail" 
      component={CocktailDetailScreen} 
      options={{ title: 'Cocktail Details' }} 
    />
  </Stack.Navigator>
);

const MealStack = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="MealScreen" 
      component={MealScreen} 
      options={({ navigation }) => ({
        title: 'Meal Search',
        headerLeft: () => <SettingsIcon navigation={navigation} />
      })} 
    />
    <Stack.Screen 
      name="MealDetail" 
      component={MealDetailScreen} 
      options={{ title: 'Meal Details' }} 
    />
  </Stack.Navigator>
);

const ShoppingListStack = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="ShoppingListScreen" 
      component={ShoppingListScreen} 
      options={({ navigation }) => ({
        title: 'Shopping List',
        headerLeft: () => <SettingsIcon navigation={navigation} />
      })}
    />
    <Stack.Screen 
      name="ShoppingListDetailScreen" 
      component={ShoppingListDetailScreen} 
      options={{ title: 'Shopping List Details' }} // Add the detail screen option
    />
  </Stack.Navigator>
);

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;
        if (route.name === 'Main') {
          iconName = 'home';
        } else if (route.name === 'Meals') {
          iconName = 'food';
        } else if (route.name === 'Cocktails') {
          iconName = 'glass-cocktail';
        } else if (route.name === 'ShoppingList') {
          iconName = 'shopping';
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
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="MainApp" component={TabNavigator} options={{ headerShown: false }} />
          <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings' }} />
          <Stack.Screen name='ListDetailScreen' component={ListDetailScreen} options={{ title: 'List Details' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
