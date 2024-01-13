import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBRa8tzXFUOLPLjeAfO2eZecikUX1shxmg",
  authDomain: "blog-e11c2.firebaseapp.com",
  projectId: "blog-e11c2",
  storageBucket: "blog-e11c2.appspot.com",
  messagingSenderId: "525577351112",
  appId: "1:525577351112:web:b7a8ab13bd8c6ac56b1afd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
