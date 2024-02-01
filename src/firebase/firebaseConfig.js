// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHhVJKmP0CA2XyqxSkUguwU-xMNslKE74",
  authDomain: "fb-de-entrega-final.firebaseapp.com",
  projectId: "fb-de-entrega-final",
  storageBucket: "fb-de-entrega-final.appspot.com",
  messagingSenderId: "281380737633",
  appId: "1:281380737633:web:0f9c84c00a39e3c1e85020"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);