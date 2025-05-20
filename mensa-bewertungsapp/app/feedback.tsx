// app/feedback.tsx
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, Text, Alert } from 'react-native';
import KommentarBox from '../components/KommentarBox';
import { db } from '../db/firebaseConfig';
import {
  addDoc,
  collection,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
} from 'firebase/firestore';

type Kommentar = {
  id: string;
  text: string;
  stars: number;
  createdAt: any;
  userId: string;
};

export default function FeedbackScreen() {
  const [kommentare, setKommentare] = useState<Kommentar[]>([]);

  // Echtzeit-Kommentare laden
  useEffect(() => {
    const q = query(collection(db, 'comments'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<Kommentar, 'id'>),
        }));
        setKommentare(data);
      },
      (error) => {
        console.error('❌ Fehler beim Laden der Kommentare:', error.message || error);
        Alert.alert('Fehler beim Laden', error.message || String(error));
      }
    );

    return () => unsubscribe();
  }, []);

  // Kommentar absenden
  const handleKommentarSenden = async (data: { text: string; stars: number }) => {
    console.log('Wird gespeichert:', data); // Debug-Ausgabe

    try {
      const docRef = await addDoc(collection(db, 'comments'), {
        text: data.text,
        stars: data.stars,
        createdAt: serverTimestamp(),
        userId: 'demo-user-123',
      });
      console.log('✅ Kommentar erfolgreich gespeichert! ID:', docRef.id);
    } catch (error: any) {
      const fehlerText = error.message || JSON.stringify(error) || String(error);
      console.error('❌ Fehler beim Speichern:', fehlerText);
      Alert.alert('Fehler beim Speichern', fehlerText);
    }
  };

  return (
    <View style={styles.container}>
      <KommentarBox onSubmit={handleKommentarSenden} />

      <FlatList
        data={kommentare}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.commentItem}>
            <Text style={styles.commentText}>⭐ {item.stars}</Text>
            <Text style={styles.commentText}>{item.text}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={{ padding: 20, textAlign: 'center', color: '#999' }}>
            Noch keine Kommentare vorhanden.
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    padding: 16,
  },
  commentItem: {
    backgroundColor: '#f1f1f1',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  commentText: {
    fontSize: 14,
    color: '#333',
  },
});
