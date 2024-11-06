import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';

const PrintListScreen = ({ route, navigation }) => {
  const { list } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{list.name || 'Shopping List'}</Text> {/* Display list name */}
      <FlatList
        data={list.items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item}</Text>
        )}
      />
      <Button title="Back to Shopping List" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f4f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    fontSize: 18,
    marginVertical: 5,
  },
});

export default PrintListScreen;
