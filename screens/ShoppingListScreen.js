// ShoppingListScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Button } from 'react-native';

const ShoppingListScreen = () => {
  const [item, setItem] = useState('');
  const [shoppingList, setShoppingList] = useState([]);

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

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add an item..."
        value={item}
        onChangeText={setItem}
      />
      <Button title="Add to List" onPress={addItem} />

      <FlatList
        data={shoppingList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.item}>{item}</Text>
            <TouchableOpacity onPress={() => removeItem(index)}>
              <Text style={styles.remove}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 8,
    borderRadius: 4,
    marginBottom: 8,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  item: {
    fontSize: 16,
  },
  remove: {
    color: 'red',
  },
});

export default ShoppingListScreen;
