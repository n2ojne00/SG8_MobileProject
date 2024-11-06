import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Button, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import { useTheme } from '../contexts/ThemeContext';

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
      <Text style={[styles.itemText, { color: isDarkMode ? '#ffffff' : '#495057' }]}>{item}</Text>
      <TouchableOpacity onPress={() => removeItem(index)}>
        <Text style={[styles.removeText, { color: isDarkMode ? '#ff6b6b' : '#dc3545' }]}>Remove</Text>
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
    <View style={styles.container}>
      {/* List Name and Item Input Fields */}
      <TextInput
        style={[
          styles.input,
          { backgroundColor: isDarkMode ? '#1e1e1e' : '#fff', color: isDarkMode ? '#ffffff' : '#000000' },
        ]}
        placeholder="List Name"
        placeholderTextColor={isDarkMode ? '#cccccc' : '#888888'}
        value={listName}
        onChangeText={setListName}
      />
      <TextInput
        style={[
          styles.input,
          { backgroundColor: isDarkMode ? '#1e1e1e' : '#fff', color: isDarkMode ? '#ffffff' : '#000000' },
        ]}
        placeholder="Add an item..."
        placeholderTextColor={isDarkMode ? '#cccccc' : '#888888'}
        value={item}
        onChangeText={setItem}
      />
      <Button title="Add to List" onPress={addItem} />

      {/* Save List Button (Outside FlatList) */}
      <TouchableOpacity
        style={[styles.saveButton, { backgroundColor: isDarkMode ? '#007bff' : '#007bff' }]}
        onPress={saveList}
      >
        <Text style={styles.saveButtonText}>Save List</Text>
      </TouchableOpacity>

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
                <View style={[styles.currentListContainer, { backgroundColor: isDarkMode ? '#1e1e1e' : '#e9ecef' }]}>
                  <Text style={[styles.sectionTitle, { color: isDarkMode ? '#ffffff' : '#343a40' }]}>Current Shopping List</Text>
                  <FlatList
                    data={shoppingList}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderItem}
                  />
                </View>
              );
            case 'savedLists':
              return (
                <View style={[styles.savedListsContainer, { backgroundColor: isDarkMode ? '#1e1e1e' : '#e9ecef' }]}>
                  <Text style={[styles.sectionTitle, { color: isDarkMode ? '#ffffff' : '#343a40' }]}>Saved Shopping Lists</Text>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  currentListContainer: {
    marginTop: 20,
    padding: 10,
    borderRadius: 8,
    elevation: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  itemText: {
    fontSize: 16,
  },
  removeText: {
    fontWeight: 'bold',
  },
  savedListsContainer: {
    marginTop: 20,
    padding: 10,
    borderRadius: 8,
    elevation: 1,
  },
  savedListItem: {
    marginVertical: 5,
  },
  savedListText: {
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  mapContainer: {
    marginTop: 20,
    height: 300,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  errorText: {
    textAlign: 'center',
    color: '#ff6b6b',
    fontSize: 16,
  },
  saveButton: {
    marginTop: 20,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ShoppingListScreen
