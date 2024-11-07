// ShoppingListDetailScreen.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ShoppingListDetailScreen = ({ route }) => {
  const { listTitle, items } = route.params; // Get the list title and items passed from the previous screen

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{listTitle}</Text>
      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
      />
    </View>
  );  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    fontSize: 18,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default ShoppingListDetailScreen;
