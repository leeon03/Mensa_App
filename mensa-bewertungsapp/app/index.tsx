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
import { Colors } from '../constants/Colors'; // Achte darauf, dass Colors richtig importiert ist

export default function LoginScreen() {
  const theme = useColorScheme() || 'light';
  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate('login');
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
      <Text style={[styles.title, { color: Colors[theme].text }]}>
        Willkommen bei
      </Text>
      <Text style={[styles.subtitle, { color: Colors[theme].primary }]}>
        RateMyMensa
      </Text>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: Colors[theme].primary }]}
        onPress={handleLoginPress}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});
