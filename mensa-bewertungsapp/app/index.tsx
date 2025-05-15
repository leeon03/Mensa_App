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

export default function LoginScreen() {
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
      <Text style={[styles.welcomeText, { color: Colors[theme].text }]}>Willkommen bei</Text>
      <Text style={[styles.brandText, { color: Colors[theme].primary }]}>RateMyMensa</Text>

      <Image source={logoSource} style={styles.logo} resizeMode="contain" />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#63a53d' }]}
          onPress={() => handleOption('UserLoginScreen')}
        >
          <Text style={styles.buttonText}>🔑 Benutzer Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#fb8d30' }]}
          onPress={() => handleOption('RegisterScreen')}
        >
          <Text style={styles.buttonText}>📝 Neu registrieren</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#fdc128' }]}
          onPress={() => handleOption('AdminLoginScreen')}
        >
          <Text style={styles.buttonText}>🛠️ Admin Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingTop: 40,
    gap: 12,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: '400',
    marginBottom: 0,
  },
  brandText: {
    fontSize: 36,
    fontWeight: '800',
    marginBottom: 20,
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 40,
  },
  buttonContainer: {
    width: '100%',
    gap: 14,
  },
  button: {
    width: '100%',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 14,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
});
