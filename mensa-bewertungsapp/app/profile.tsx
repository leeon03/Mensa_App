import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  ScrollView,
  Platform,
} from 'react-native';
import { useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProfileScreen() {
  const theme = useColorScheme() || 'light';

  const clearStorage = () => {
    Alert.alert(
      'Zurücksetzen',
      'Möchtest du alle gespeicherten Daten wirklich löschen?',
      [
        { text: 'Abbrechen', style: 'cancel' },
        {
          text: 'Löschen',
          style: 'destructive',
          onPress: async () => {
            await AsyncStorage.clear();
            Alert.alert('Erfolgreich', 'Alle Daten wurden gelöscht.');
          },
        },
      ]
    );
  };

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: Colors[theme].background }]}>
      <Text style={[styles.title, { color: theme === 'dark' ? '#fff' : '#000' }]}>Dein Profil</Text>

      <View style={[styles.card, { backgroundColor: Colors[theme].card }]}>
        <Ionicons name="person-circle" size={100} color={Colors[theme].primary} />
        <Text style={[styles.name, { color: Colors[theme].text }]}>Max Mustermann</Text>
        <Text style={[styles.email, { color: Colors[theme].text }]}>max@beispiel.de</Text>
        <View style={styles.infoRow}>
          <Ionicons name="calendar" size={16} color={Colors[theme].icon} style={styles.infoIcon} />
          <Text style={[styles.infoText, { color: Colors[theme].text }]}>Mitglied seit: Januar 2024</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="heart" size={16} color="red" style={styles.infoIcon} />
          <Text style={[styles.infoText, { color: Colors[theme].text }]}>Favorisierte Gerichte: 12</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: Colors[theme].text }]}>Einstellungen</Text>

        <TouchableOpacity style={[styles.settingButton, { backgroundColor: Colors[theme].surface }]}>
          <Ionicons name="pencil" size={20} color={Colors[theme].icon} style={styles.settingIcon} />
          <Text style={[styles.settingText, { color: Colors[theme].text }]}>Profil bearbeiten</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.settingButton, { backgroundColor: Colors[theme].surface }]}>
          <Ionicons name="notifications" size={20} color="#007AFF" style={styles.settingIcon} />
          <Text style={[styles.settingText, { color: Colors[theme].text }]}>Benachrichtigungen verwalten</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.settingButton, { backgroundColor: '#f8d7da' }]}
          onPress={clearStorage}
        >
          <Ionicons name="trash" size={20} color="#b00020" style={styles.settingIcon} />
          <Text style={[styles.settingText, { color: '#b00020' }]}>App zurücksetzen</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    alignItems: 'center',
    paddingBottom: 40,
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
  },
  card: {
    alignItems: 'center',
    padding: 20,
    borderRadius: 16,
    width: '100%',
    marginBottom: 24,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: Platform.OS === 'android' ? 2 : 0,
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    marginTop: 12,
  },
  email: {
    fontSize: 16,
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  infoIcon: {
    marginRight: 6,
  },
  infoText: {
    fontSize: 15,
  },
  section: {
    width: '100%',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  settingButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
  },
  settingIcon: {
    marginRight: 12,
  },
  settingText: {
    fontSize: 16,
    fontWeight: '500',
  },
});
