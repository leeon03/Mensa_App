import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors';

export default function HomeScreen() {
  const theme = useColorScheme() || 'light';
  const router = useRouter();

  return (
    <View style={[styles.container, { backgroundColor: Colors[theme].background }]}>
      <Image
        source={require('../assets/mensa-icon.png')} // <-- ersetze ggf. durch dein eigenes Icon
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={[styles.title, { color: Colors[theme].primary }]}>
        🍽️ Mensa Bewertungs-App
      </Text>
      <Text style={[styles.subtitle, { color: Colors[theme].text }]}>
        Entdecke, bewerte und diskutiere dein Mensa-Essen.
      </Text>

      <View style={styles.buttonContainer}>
        <PrimaryButton
          label="📅 Speiseplan ansehen"
          color={Colors[theme].primary}
          onPress={() => router.push('/speiseplan')}
        />
        <PrimaryButton
          label="🍽️ Heute in der Mensa"
          color={Colors[theme].secondary}
          onPress={() => router.push('/heute')}
        />
  
        <PrimaryButton
          label="❤️ Essens-Tinder"
          color="#d62828"
          onPress={() => router.push('/tinder')}
        />
        <PrimaryButton
          label="🔐 Login / Admin"
          color={Colors[theme].text}
          onPress={() => router.push('/login')}
        />
      </View>
    </View>
  );
}

function PrimaryButton({ label, onPress, color }: { label: string; onPress: () => void; color: string }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={onPress}
      activeOpacity={0.85}
    >
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
    gap: 12,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 6,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    marginBottom: 20,
    textAlign: 'center',
    maxWidth: 320,
  },
  buttonContainer: {
    width: '100%',
    gap: 14,
  },
  button: {
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
