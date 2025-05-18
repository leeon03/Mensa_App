import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  const theme = useColorScheme() || 'light';

  return (
    <View style={[styles.container, { backgroundColor: Colors[theme].background }]}>
      <Ionicons name="person-circle" size={100} color={Colors[theme].primary} style={styles.icon} />
      <Text style={[styles.name, { color: Colors[theme].text }]}>Max Mustermann</Text>
      <Text style={[styles.email, { color: Colors[theme].text }]}>max@beispiel.de</Text>

      <View style={[styles.infoBox, { backgroundColor: Colors[theme].card }]}>
        <Text style={[styles.infoText, { color: Colors[theme].text }]}>Mitglied seit: Januar 2024</Text>
        <Text style={[styles.infoText, { color: Colors[theme].text }]}>Favorisierte Gerichte: 12</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
  },
  icon: {
    marginBottom: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
  },
  email: {
    fontSize: 16,
    marginBottom: 24,
  },
  infoBox: {
    padding: 20,
    borderRadius: 12,
    width: '100%',
  },
  infoText: {
    fontSize: 16,
    marginBottom: 8,
  },
});
