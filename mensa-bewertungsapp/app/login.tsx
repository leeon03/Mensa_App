import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../constants/Colors';

export default function Login() {
  const theme = useColorScheme() || 'light';
  const navigation = useNavigation();

  const handleOption = (option: string) => {
    navigation.navigate(option);
  };

  const logoSource =
    theme === 'dark'
      ? require('../assets/AppLogoDarkmode.png')
      : require('../assets/AppLogo.png');

  return (
    <View style={[styles.container, { backgroundColor: Colors[theme].background }]}>
      <Image
        source={logoSource}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={[styles.title, { color: Colors[theme].primary }]}>Willkommen</Text>
      <Text style={[styles.subtitle, { color: Colors[theme].text }]}>
        Wähle eine Option zum Fortfahren
      </Text>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: Colors[theme].primary }]}
        onPress={() => handleOption('UserLoginScreen')}
      >
        <Text style={styles.buttonText}>🔑 Benutzer Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: Colors[theme].secondary }]}
        onPress={() => handleOption('RegisterScreen')}
      >
        <Text style={styles.buttonText}>📝 Neu registrieren</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: Colors[theme].accent }]}
        onPress={() => handleOption('AdminLoginScreen')}
      >
        <Text style={styles.buttonText}>🛠️ Admin Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    gap: 12,
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 24,
    textAlign: 'center',
  },
  button: {
    width: '100%',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});
