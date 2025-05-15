import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  const theme = useColorScheme() || 'light';
  const router = useRouter();

  return (
    <View style={[styles.container, { backgroundColor: Colors[theme].background }]}>
      <View style={styles.header}>
        <Image
          source={require('../assets/AppLogo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={[styles.title, { color: Colors[theme].primary }]}>
          🍽️ Mensa Bewertungs-App
        </Text>
        <Text style={[styles.subtitle, { color: Colors[theme].text }]}>
          Entdecke, bewerte und diskutiere dein Mensa-Essen.
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <PrimaryButton
          icon="calendar-outline"
          label="Speiseplan ansehen"
          color={Colors[theme].primary}
          onPress={() => router.push('/speiseplan')}
        />
        <PrimaryButton
          icon="restaurant-outline"
          label="Heute in der Mensa"
          color={Colors[theme].secondary}
          onPress={() => router.push('/heute')}
        />
        <PrimaryButton
          icon="heart-outline"
          label="Essens-Tinder"
          color="#d62828"
          onPress={() => router.push('/tinder')}
        />
      </View>
    </View>
  );
}

function PrimaryButton({
  label,
  icon,
  onPress,
  color,
}: {
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
  color: string;
}) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={onPress}
      activeOpacity={0.85}
    >
      <Ionicons name={icon} size={20} color="#fff" style={styles.buttonIcon} />
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 24,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    maxWidth: 320,
    color: '#666',
  },
  buttonContainer: {
    width: '100%',
    gap: 16,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 14,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: Platform.OS === 'android' ? 2 : 0,
  },
  buttonIcon: {
    marginRight: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
