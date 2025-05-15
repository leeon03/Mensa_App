import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors';

export default function LoginScreen() {
  const theme = useColorScheme() || 'light';

  const handleLogin = () => {
    // Hier kommt deine Login-Logik hin
    console.log('Login gedrückt');
  };

  return (
    <View style={[styles.container, { backgroundColor: Colors[theme].background }]}>
      <Text style={[styles.title, { color: Colors[theme].text }]}>Willkommen zur App</Text>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: Colors[theme].primary }]}
        onPress={handleLogin}
      >
        <Text style={[styles.buttonText, { color: '#fff' }]}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});