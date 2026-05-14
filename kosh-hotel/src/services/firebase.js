import { initializeApp } from "firebase/app";

import {
  getAuth
} from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCssk7Ethc9tz84NI1ehCjo6FBMMf8mNaE",
  authDomain: "kosh-hotel.firebaseapp.com",
  projectId: "kosh-hotel",
  storageBucket: "kosh-hotel.firebasestorage.app",
  messagingSenderId: "853470519550",
  appId: "1:853470519550:web:db06ef124b56a55b3c05af",
  measurementId: "G-QWRESS5LVW"
};

const app =
  initializeApp(firebaseConfig);

export const auth =
  getAuth(app);