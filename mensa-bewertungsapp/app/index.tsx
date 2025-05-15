import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../constants/Colors';

export default function LoginScreen() {
  const theme = useColorScheme() || 'light';
  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate('login');
  };

  return (
    <View style={[styles.container, { backgroundColor: Colors[theme].background }]}>
      <Text style={[styles.title, { color: Colors[theme].text }]}>Willkommen zur App</Text>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: Colors[theme].primary }]}
        onPress={handleLoginPress}
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