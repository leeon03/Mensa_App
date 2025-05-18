import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import { useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

// LayoutAnimation für Android aktivieren
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const STORAGE_KEY = 'favorites_alerts';

const mockFavorites = [
  { id: '1', name: 'Spaghetti Bolognese', tags: ['beliebt'] },
  { id: '2', name: 'Veganes Curry', tags: ['vegan', 'scharf'] },
  { id: '3', name: 'Schnitzel mit Pommes', tags: [] },
];

export default function FavoritesScreen() {
  const theme = useColorScheme() || 'light';
  const [alerts, setAlerts] = useState<Record<string, boolean>>({});
  const [showLegend, setShowLegend] = useState(false);

  useEffect(() => {
    const loadAlertsFromStorage = async () => {
      const stored = await AsyncStorage.getItem(STORAGE_KEY);
      if (stored) setAlerts(JSON.parse(stored));
    };
    loadAlertsFromStorage();
  }, []);

  const saveAlertsToStorage = async (data: Record<string, boolean>) => {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  };

  const toggleAlert = (id: string) => {
    const updated = { ...alerts, [id]: !alerts[id] };
    setAlerts(updated);
    saveAlertsToStorage(updated);
  };

  const toggleLegend = () => {
    LayoutAnimation.easeInEaseOut();
    setShowLegend(!showLegend);
  };

  const renderTags = (tags: string[]) => (
    <View style={styles.tagRow}>
      {tags.includes('vegan') && <Text style={styles.tag}>🌱</Text>}
      {tags.includes('vegetarisch') && <Text style={styles.tag}>🥦</Text>}
      {tags.includes('scharf') && <Text style={styles.tag}>🌶️</Text>}
      {tags.includes('beliebt') && <Text style={styles.tag}>🔥</Text>}
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: Colors[theme].background }]}>
      <Text style={styles.title}>Deine Favoriten</Text>

      <TouchableOpacity onPress={toggleLegend} style={styles.legendToggle}>
        <Text style={[styles.legendeTitle, { color: Colors[theme].text }]}>
          Legende {showLegend ? '▲' : '▼'}
        </Text>
      </TouchableOpacity>

      {showLegend && (
        <View style={[styles.legendeContainer, { backgroundColor: Colors[theme].surface }]}>
          <View style={styles.legendeChip}><Text style={styles.chipText}>🌱 Vegan</Text></View>
          <View style={styles.legendeChip}><Text style={styles.chipText}>🥦 Vegetarisch</Text></View>
          <View style={styles.legendeChip}><Text style={styles.chipText}>🌶️ Scharf</Text></View>
          <View style={styles.legendeChip}><Text style={styles.chipText}>🔥 Beliebt</Text></View>
          <View style={styles.legendeChip}>
            <Ionicons name="heart" size={14} color="red" style={{ marginRight: 4 }} />
            <Text style={styles.chipText}>Favorit</Text>
          </View>
          <View style={styles.legendeChip}>
            <Ionicons name="notifications" size={14} color="#007AFF" style={{ marginRight: 4 }} />
            <Text style={styles.chipText}>Erinnerung</Text>
          </View>
        </View>
      )}

      <FlatList
        data={mockFavorites}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.item, { backgroundColor: Colors[theme].card }]}>
            <View style={styles.itemHeader}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Ionicons name="heart" size={20} color="red" />
                <Text style={[styles.itemText, { color: Colors[theme].text }]}>{item.name}</Text>
              </View>
              <TouchableOpacity onPress={() => toggleAlert(item.id)}>
                <Ionicons
                  name={alerts[item.id] ? 'notifications' : 'notifications-outline'}
                  size={20}
                  color={alerts[item.id] ? '#007AFF' : Colors[theme].icon}
                />
              </TouchableOpacity>
            </View>
            {renderTags(item.tags)}
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
    fontSize: 36,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 24,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    textShadowColor: 'rgba(0,0,0,0.15)',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 3,
    color: 'red',
  },
  legendToggle: {
    alignSelf: 'flex-start',
    paddingVertical: 6,
  },
  legendeTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  legendeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    padding: 10,
    borderRadius: 12,
    marginBottom: 12,
  },
  legendeChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 6,
    margin: 4,
  },
  chipText: {
    fontSize: 13,
    color: '#333',
  },
  item: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  itemHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemText: {
    marginLeft: 12,
    fontSize: 16,
    fontWeight: '600',
  },
  tagRow: {
    flexDirection: 'row',
    marginTop: 8,
  },
  tag: {
    fontSize: 16,
    marginRight: 6,
  },
});
