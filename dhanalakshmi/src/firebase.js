// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCc1IlQQuZAPrmLeNjxVdZP0wWTxmWRY_c",
  authDomain: "myfirebasesite0786.firebaseapp.com",
  projectId: "myfirebasesite0786",
  storageBucket: "myfirebasesite0786.firebasestorage.app",
  messagingSenderId: "885243468971",
  appId: "1:885243468971:web:b2029175190f642dd9abee"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
