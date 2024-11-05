import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ListDetailScreen = ({ route }) => {
  const { list } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping List Details</Text>
      <FlatList
        data={list}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#343a40',
  },
  item: {
    fontSize: 18,
    color: '#495057',
    paddingVertical: 5,
  },
});

export default ListDetailScreen;
