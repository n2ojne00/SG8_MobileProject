// ShoppingListScreen.js
import React, { useState } from 'react';
import styles from "../styles/style";
import { View, Text, TextInput, FlatList, TouchableOpacity, Button } from 'react-native';

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
    <View style={styles.containerShop}>
      <TextInput
        style={styles.inputShop}
        placeholder="Add an item..."
        value={item}
        onChangeText={setItem}
      />
      <Button title="Add to List" onPress={addItem} />

      <FlatList
        data={shoppingList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.itemContainerShop}>
            <Text style={styles.itemShop}>{item}</Text>
            <TouchableOpacity onPress={() => removeItem(index)}>
              <Text style={styles.removeShop}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default ShoppingListScreen;
