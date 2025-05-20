// firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDwpfs9prktvaS_XMKepp4kaEpZJqptuYo",
  authDomain: "uni-mensa.firebaseapp.com",
  projectId: "uni-mensa",
  storageBucket: "uni-mensa.firebasestorage.app",
  messagingSenderId: "119678230583",
  appId: "1:119678230583:web:39a133401ce5a93de2dfb2",
  measurementId: "G-EWEJ0NTDMY"
};

const app = initializeApp(firebaseConfig);

// Wichtig: Firestore exportieren
export const db = getFirestore(app);
export default app;
