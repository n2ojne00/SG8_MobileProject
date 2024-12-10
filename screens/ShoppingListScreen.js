import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import { useTheme } from '../contexts/ThemeContext';
import { AntDesign, Entypo, MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../styles/GlobalStyles';
import { ShopList } from '../styles/ShoppingListStyles';
import { MainStyles } from '../styles/MainScreenStyles';
import { RecipeList } from '../styles/RecipeListStyles';
import ThemeLayout from '../contexts/ThemeLayout';
import { useShoppingList } from '../contexts/ShoppingListContext';

const ShoppingListScreen = ({ navigation }) => {
  const [item, setItem] = useState('');
  const [savedLists, setSavedLists] = useState([]);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [listName, setListName] = useState('');
  const { isDarkMode } = useTheme();
  const { shoppingList, setShoppingList, addToShoppingList, removeFromShoppingList } = useShoppingList(); // Use setShoppingList here
  const { theme } = useTheme(); // Access the current theme from context

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const addItem = () => {
    if (item) {
      addToShoppingList(item); // Add to context-based shopping list
      setItem('');
    }
  };
  const removeItem = (item) => {
    removeFromShoppingList(item); // Use the context function to remove an item
  };
  const saveList = () => {
    if (!listName.trim()) {
      alert('List name cannot be empty');
      return;
    }
    if (shoppingList.length > 0) {
      setSavedLists([...savedLists, { name: listName, items: shoppingList }]);
      setListName('');

      // Clear the current shopping list after saving
      setShoppingList([]); // Clear the shopping list state
    }
  };

  const navigateToListDetail = (list) => {
    navigation.navigate('PrintListScreen', { list });
  };

  const renderMap = () => (
    <View style={[ShopList.mapContainer, { borderColor: theme.borderDarkGreen }]}>
      <Text style={[MainStyles.sectionTitle, { color: theme.textDarkGreen }]}>Your Location</Text>
      {errorMsg ? (
        <Text style={[ShopList.errorText, { color: theme.textError }]}>{errorMsg}</Text>
      ) : location ? (
        <MapView
          style={ShopList.map}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title="You are here"
          />
        </MapView>
      ) : (
        <Text style={[{ color: isDarkMode ? '#ffffff' : '#000000' }]}>Loading...</Text>
      )}
    </View>
  );

  const renderItem = ({ item }) => (
    <View style={[ShopList.itemContainer, { borderColor: theme.borderDarkGreen }]}>
      <Text style={[ShopList.itemText, { color: theme.textDarkGreen }]}>{item}</Text>
      <TouchableOpacity onPress={() => removeItem(item)}>
        <MaterialIcons name="highlight-remove" size={24} color="#f67b43" />
      </TouchableOpacity>
    </View>
  );

  const renderSavedListItem = ({ item, index }) => (
    <TouchableOpacity onPress={() => navigateToListDetail(item)}>
      <Text style={[ShopList.savedListText, { color: theme.textDarkGreen }]}>{item.name || `List ${index + 1}`}</Text>
    </TouchableOpacity>
  );

  return (
    <ThemeLayout>
      <ImageBackground
        source={require('../images/winter.jpg')}
        style={globalStyles.background}
        resizeMode="cover"
      >
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <ScrollView contentContainerStyle={ShopList.scrollContainer} keyboardShouldPersistTaps="handled">
            <View style={globalStyles.container}>
              <View style={[ShopList.shopListCreation, { borderColor: theme.borderDarkGreen, backgroundColor: theme.bgOfTheDayContainer }]}>
                <TextInput
                  style={[ShopList.inputShopListName, , { color: theme.textDarkGreen }]}
                  placeholder="List Name"
                  placeholderTextColor={theme.textAlmostBlack}
                  value={listName}
                  onChangeText={setListName}
                />
                <View style={ShopList.addItem}>
                  <TextInput
                    style={[ShopList.inputShopListItem, { borderColor: theme.borderDarkGreen }]}
                    placeholder="Add an item..."
                    placeholderTextColor={theme.textAlmostBlack}
                    value={item}
                    onChangeText={setItem}
                  />
                  <TouchableOpacity style={[ShopList.addShopButton, { backgroundColor: theme.bgSaveBtn, borderColor: theme.borderDarkGreen }]} onPress={addItem}>
                    <Entypo name="add-to-list" size={25} color={theme.textDarkGreen} />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={[RecipeList.createButton, { backgroundColor: theme.bgSaveBtn, borderColor: theme.borderDarkGreen }]} onPress={saveList}>
                  <Text style={[RecipeList.buttonTextRL, { color: theme.textDarkGreen }]}>Save List</Text>
                </TouchableOpacity>
              </View>
              {/* Current List */}
              <View style={[ShopList.currentListContainer, { borderColor: theme.borderDarkGreen, backgroundColor: theme.bgOfTheDayContainer }]}>
                <Text style={[MainStyles.sectionTitle, { color: isDarkMode ? '#ffffff' : '#343a40' }]}>
                  Current Shopping List
                </Text>
                {shoppingList.map((item, index) => (
                  <View key={index.toString()} >
                    {renderItem({ item, index })}
                  </View>
                ))}
              </View>

              {/* Saved Lists */}
              <View style={[ShopList.currentListContainer, { borderColor: theme.borderDarkGreen, backgroundColor: theme.bgOfTheDayContainer }]}>
                <Text style={[MainStyles.sectionTitle, { color: isDarkMode ? '#ffffff' : '#343a40' }]}>
                  Saved Shopping Lists
                </Text>
                {savedLists.map((list, index) => (
                  <View key={index.toString()} style={[ShopList.listItem, { borderColor: theme.borderDarkGreen }]}>
                    <AntDesign name="hearto" size={20} color="#f67b43" style={{ marginRight: 15, }} />
                    {renderSavedListItem({ item: list })}
                  </View>
                ))}
              </View>

              {/* Map */}
              <View>{renderMap()}</View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>
    </ThemeLayout>
  );
};

export default ShoppingListScreen;
