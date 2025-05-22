import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase-Konfiguration
const firebaseConfig = {
  apiKey: 'AIzaSyB2f97T7UkO0yzCzLp3v1O-atXvjAFhKGQ',
  authDomain: 'mensa-bewertungsapp.firebaseapp.com',
  databaseURL: 'https://mensa-bewertungsapp-default-rtdb.firebaseio.com',
  projectId: 'mensa-bewertungsapp',
  storageBucket: 'mensa-bewertungsapp.appspot.com',
  messagingSenderId: '119485466098',
  appId: '1:119485466098:web:cee40020f69fc1137b576b',
  measurementId: 'G-N7ZWYK180X',
};

// Initialisierung
const app = initializeApp(firebaseConfig);

// Auth und DB – einfach und direkt
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
