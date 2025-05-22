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
import { Colors } from '@constants/Colors';
import * as Haptics from 'expo-haptics'; // ✅ Haptics importieren

export default function AdminLoginScreen() {
  const theme = useColorScheme() || 'light';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [adminCode, setAdminCode] = useState('');

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleLogin = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium); // ✅ Haptik auslösen

    if (!email || !password || !adminCode) {
      Alert.alert('Fehler', 'Bitte alle Felder ausfüllen.');
      return;
    }

    console.log('Admin-Login:', { email, password, adminCode });
    // Hier kommt deine API/Validierung etc.
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={[styles.container, { backgroundColor: Colors[theme].background }]}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={[styles.title, { color: '#fdc128' }]}>Admin Login</Text>

        <TextInput
          style={[styles.input, {
            backgroundColor: Colors[theme].surface,
            color: Colors[theme].text,
            borderColor: focusedField === 'email' ? '#fdc128' : Colors[theme].icon,
          }]}
          placeholder="Admin-E-Mail"
          placeholderTextColor={Colors[theme].icon}
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
          onFocus={() => setFocusedField('email')}
          onBlur={() => setFocusedField(null)}
        />

        <TextInput
          style={[styles.input, {
            backgroundColor: Colors[theme].surface,
            color: Colors[theme].text,
            borderColor: focusedField === 'password' ? '#fdc128' : Colors[theme].icon,
          }]}
          placeholder="Passwort"
          placeholderTextColor={Colors[theme].icon}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          onFocus={() => setFocusedField('password')}
          onBlur={() => setFocusedField(null)}
        />

        <TextInput
          style={[styles.input, {
            backgroundColor: Colors[theme].surface,
            color: Colors[theme].text,
            borderColor: focusedField === 'adminCode' ? '#fdc128' : Colors[theme].icon,
          }]}
          placeholder="Admin-Code"
          placeholderTextColor={Colors[theme].icon}
          secureTextEntry
          value={adminCode}
          onChangeText={setAdminCode}
          onFocus={() => setFocusedField('adminCode')}
          onBlur={() => setFocusedField(null)}
        />

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#fdc128' }]}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Einloggen</Text>
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
    color: '#000',
    fontWeight: '600',
    fontSize: 16,
  },
});
