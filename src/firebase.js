import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "lottokeeper-ap4d.firebaseapp.com",
  projectId: "lottokeeper-ap4d",
  storageBucket: "lottokeeper-ap4d.appspot.com",
  messagingSenderId: "669409563271",
  appId: "1:669409563271:web:b9c6b657e3a9fcb04f1e22"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);