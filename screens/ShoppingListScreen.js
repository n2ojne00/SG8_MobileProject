import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Button, StyleSheet, ImageBackground } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import { useTheme } from '../contexts/ThemeContext';
import styles from '../styles/style';
import { Entypo, MaterialIcons } from '@expo/vector-icons';


const ShoppingListScreen = ({ navigation }) => {
  const [item, setItem] = useState('');
  const [shoppingList, setShoppingList] = useState([]);
  const [savedLists, setSavedLists] = useState([]);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [listName, setListName] = useState('');
  const { isDarkMode } = useTheme();

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
      setShoppingList([...shoppingList, item]);
      setItem('');
    }
  };

  const removeItem = (index) => {
    const newList = shoppingList.filter((_, i) => i !== index);
    setShoppingList(newList);
  };

  const saveList = () => {
    if (shoppingList.length > 0 && listName) {
      setSavedLists([...savedLists, { name: listName, items: shoppingList }]);
      setShoppingList([]);
      setListName('');
    }
  };

  const navigateToListDetail = (list) => {
    navigation.navigate('PrintListScreen', { list });
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item}</Text>
      <TouchableOpacity onPress={() => removeItem(index)}>
        <MaterialIcons name="highlight-remove" size={24} color="#fb4040" />
      </TouchableOpacity>
    </View>
  );

  const renderSavedListItem = ({ item, index }) => (
    <TouchableOpacity
      style={styles.savedListItem}
      onPress={() => navigateToListDetail(item)}
    >
      <Text style={[styles.savedListText, { color: isDarkMode ? '#80bdff' : '#007bff' }]}>
        {item.name || `List ${index + 1}`}
      </Text>
    </TouchableOpacity>
  );

  const renderMap = () => (
    <View style={styles.mapContainer}>
      <Text style={[styles.sectionTitle, { color: isDarkMode ? '#ffffff' : '#343a40' }]}>Your Location</Text>
      {errorMsg ? (
        <Text style={[styles.errorText, { color: isDarkMode ? '#ff6b6b' : '#dc3545' }]}>{errorMsg}</Text>
      ) : location ? (
        <MapView
          style={styles.map}
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

  return (
    <ImageBackground
      source={require('../images/winter.jpg')}
      style={styles.background}
      resizeMode="cover"
    >

      <View style={styles.container}>

        {/* List Name and Item Input Fields */}
        <View style={styles.shopListCreation}>
          <View style={styles.sectionTitleDS}>
            <TextInput
              style={[
                styles.inputShopListName
              ]}
              placeholder="List Name"
              placeholderTextColor={isDarkMode ? '#cccccc' : '#888888'}
              value={listName}
              onChangeText={setListName}
            />
          </View>
          <View style={styles.addItem}>
            <TextInput
              style={
                styles.inputShopListItem}
              placeholder="Add an item..."
              placeholderTextColor={isDarkMode ? '#cccccc' : '#888888'}
              value={item}
              onChangeText={setItem}
            />

            <TouchableOpacity title="Add to List" onPress={addItem} style={styles.addShopButton}  >
              <Entypo name="add-to-list" size={24} color="black" />
            </TouchableOpacity>

          </View>



          {/* Save List Button (Outside FlatList) */}
          <TouchableOpacity
            style={styles.createButton}
            onPress={saveList}
          >
            <Text style={styles.buttonTextRL}>Save List</Text>
          </TouchableOpacity>
        </View>

        {/* FlatList for the shopping list */}
        <FlatList
          data={[
            { key: 'Current List', type: 'shoppingList' },
            { key: 'Saved Lists', type: 'savedLists' },
            { key: 'Map', type: 'map' },
          ]}
          renderItem={({ item }) => {
            switch (item.type) {
              case 'shoppingList':
                return (
                  <View style={[styles.currentListContainer, { backgroundColor: isDarkMode ? '#1e1e1e' : '#f3fff5ac' }]}>
                    <Text style={[styles.sectionTitleDS, { color: isDarkMode ? '#ffffff' : '#343a40' }]}>Current Shopping List</Text>
                    <FlatList
                      data={shoppingList}
                      keyExtractor={(item, index) => index.toString()}
                      renderItem={renderItem}
                    />
                  </View>
                );
              case 'savedLists':
                return (
                  <View style={[styles.currentListContainer, { backgroundColor: isDarkMode ? '#1e1e1e' : '#f3fff5ac' }]}>
                    <Text style={[styles.sectionTitleDS, { color: isDarkMode ? '#ffffff' : '#343a40' }]}>Saved Shopping Lists</Text>
                    <FlatList
                      data={savedLists}
                      keyExtractor={(item, index) => index.toString()}
                      renderItem={renderSavedListItem}
                    />
                  </View>
                );
              case 'map':
                return renderMap();
              default:
                return null;
            }
          }}
          keyExtractor={(item) => item.key}
        />
      </View>

    </ImageBackground>
  );
};

export default ShoppingListScreen
