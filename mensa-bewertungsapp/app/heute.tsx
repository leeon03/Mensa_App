import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';
import { useColorScheme } from 'react-native';
import RatingStars from '../components/RatingStars';
import KommentarBox from '../components/KommentarBox';
import ChatBubble from '../components/ChatBubble';

export default function HeuteScreen() {
  const theme = useColorScheme() || 'light';

  // Beispiel-Daten – später dynamisch laden
  const gericht = {
    name: 'Vegetarisches Curry',
    beschreibung: 'Mit Reis, Gemüse & Kokossoße',
    bewertung: 4.2,
    kommentare: [
      { id: 1, user: 'Anna', text: 'Sehr lecker heute!' },
      { id: 2, user: 'Tom', text: 'War etwas zu scharf für mich.' },
    ],
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: Colors[theme].background }]}>
      <Text style={[styles.title, { color: Colors[theme].primary }]}>🍽️ Heute in der Mensa</Text>

      <View style={styles.gerichtBox}>
        <Text style={[styles.gerichtName, { color: Colors[theme].text }]}>{gericht.name}</Text>
        <Text style={{ color: Colors[theme].text }}>{gericht.beschreibung}</Text>
        <RatingStars value={gericht.bewertung} />
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: Colors[theme].text }]}>🗣️ Deine Bewertung</Text>
        <KommentarBox onSubmit={(text) => console.log('Kommentar:', text)} />
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: Colors[theme].text }]}>💬 Kommentare</Text>
        {gericht.kommentare.map((kommentar) => (
          <ChatBubble key={kommentar.id} user={kommentar.user} text={kommentar.text} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  gerichtBox: {
    marginBottom: 28,
    padding: 16,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
  },
  gerichtName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  section: {
    marginBottom: 28,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
});
