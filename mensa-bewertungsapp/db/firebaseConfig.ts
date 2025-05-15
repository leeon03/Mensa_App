// firebaseConfig.ts
import { initializeApp } from 'firebase/app';
// Optional: Importiere weitere Services, die du brauchst
// import { getAuth } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';
// import { getStorage } from 'firebase/storage';

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

// Optional: Exportiere Services
// export const auth = getAuth(app);
// export const db = getFirestore(app);
// export const storage = getStorage(app);

export default app;
