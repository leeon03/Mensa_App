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

  const logoSource =
    theme === 'dark'
      ? require('../assets/AppLogoDarkmode.png')
      : require('../assets/AppLogo.png');

  return (
    <View style={[styles.container, { backgroundColor: Colors[theme].background }]}>
      <View style={styles.header}>
        <Image
          source={logoSource}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={[styles.title, { color: Colors[theme].primary }]}>
          RateMyMensa
        </Text>
        <Text style={[styles.subtitle, { color: Colors[theme].text }]}>
          Speisepläne checken, Gerichte bewerten, Favoriten speichern – deine Mensa, dein Geschmack.
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <PrimaryButton
          icon="calendar-outline"
          label="Speiseplan ansehen"
          color={Colors[theme].accent1}
          onPress={() => router.push('/speiseplan')}
        />
        <PrimaryButton
          icon="restaurant-outline"
          label="Heute in der Mensa"
          color={Colors[theme].accent2}
          onPress={() => router.push('/heute')}
        />
        <PrimaryButton
          icon="heart-outline"
          label="Essens-Tinder"
          color={Colors[theme].accent3}
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
    marginBottom: 36,
  },
  logo: {
    width: 160,
    height: 160,
    marginBottom: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 10,
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    maxWidth: 340,
    lineHeight: 22,
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
