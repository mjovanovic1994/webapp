// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "JOUW_API_KEY",
  authDomain: "JOUW_AUTH_DOMAIN",
  projectId: "JOUW_PROJECT_ID",
  storageBucket: "JOUW_STORAGE_BUCKET",
  messagingSenderId: "JOUW_MESSAGING_SENDER_ID",
  appId: "JOUW_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
