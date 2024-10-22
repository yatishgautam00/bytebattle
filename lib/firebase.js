// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCefM8PrDdlDTlyFTAETPgzkB5VFaCjJDU",
  authDomain: "byte-battle-38a3b.firebaseapp.com",
  projectId: "byte-battle-38a3b",
  storageBucket: "byte-battle-38a3b.appspot.com",
  messagingSenderId: "185226095678",
  appId: "1:185226095678:web:0a6322566e37fffb17b56f",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
