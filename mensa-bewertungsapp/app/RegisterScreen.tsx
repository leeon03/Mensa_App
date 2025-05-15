import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors';

export default function RegisterScreen() {
  const theme = useColorScheme() || 'light';

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      Alert.alert('Fehler', 'Bitte fülle alle Felder aus.');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Fehler', 'Die Passwörter stimmen nicht überein.');
      return;
    }
    console.log('Registrierung erfolgreich:', {
      firstName,
      lastName,
      email,
      password,
    });
    // Hier kannst du eine API-Aufruf einbauen
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={[styles.container, { backgroundColor: Colors[theme].background }]}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={[styles.title, { color: Colors[theme].primary }]}>Registrieren</Text>

        <TextInput
          style={[styles.input, {
            backgroundColor: Colors[theme].surface,
            color: Colors[theme].text,
            borderColor: Colors[theme].icon,
          }]}
          placeholder="Vorname"
          placeholderTextColor={Colors[theme].icon}
          value={firstName}
          onChangeText={setFirstName}
        />

        <TextInput
          style={[styles.input, {
            backgroundColor: Colors[theme].surface,
            color: Colors[theme].text,
            borderColor: Colors[theme].icon,
          }]}
          placeholder="Nachname"
          placeholderTextColor={Colors[theme].icon}
          value={lastName}
          onChangeText={setLastName}
        />

        <TextInput
          style={[styles.input, {
            backgroundColor: Colors[theme].surface,
            color: Colors[theme].text,
            borderColor: Colors[theme].icon,
          }]}
          placeholder="E-Mail"
          placeholderTextColor={Colors[theme].icon}
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={[styles.input, {
            backgroundColor: Colors[theme].surface,
            color: Colors[theme].text,
            borderColor: Colors[theme].icon,
          }]}
          placeholder="Passwort"
          placeholderTextColor={Colors[theme].icon}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TextInput
          style={[styles.input, {
            backgroundColor: Colors[theme].surface,
            color: Colors[theme].text,
            borderColor: Colors[theme].icon,
          }]}
          placeholder="Passwort wiederholen"
          placeholderTextColor={Colors[theme].icon}
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <TouchableOpacity
          style={[styles.button, { backgroundColor: Colors[theme].primary }]}
          onPress={handleRegister}
        >
          <Text style={styles.buttonText}>Registrieren</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 12,
  },
  button: {
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});