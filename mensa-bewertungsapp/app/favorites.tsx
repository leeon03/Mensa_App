import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const mockFavorites = [
  { id: '1', name: 'Spaghetti Bolognese' },
  { id: '2', name: 'Veganes Curry' },
  { id: '3', name: 'Schnitzel mit Pommes' },
];

export default function FavoritesScreen() {
  const theme = useColorScheme() || 'light';

  return (
    <View style={[styles.container, { backgroundColor: Colors[theme].background }]}>
      <Text style={[styles.title, { color: Colors[theme].primary }]}>Deine Favoriten</Text>
      <FlatList
        data={mockFavorites}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.item, { backgroundColor: Colors[theme].card }]}>
            <Ionicons name="heart" size={20} color={Colors[theme].accent1} />
            <Text style={[styles.itemText, { color: Colors[theme].text }]}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  itemText: {
    marginLeft: 12,
    fontSize: 16,
  },
});
