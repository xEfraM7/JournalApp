// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyD662VYVoIVAuLhiAr9sf58QbF6OA055P8",
  authDomain: "journal-app-9c868.firebaseapp.com",
  projectId: "journal-app-9c868",
  storageBucket: "journal-app-9c868.appspot.com",
  messagingSenderId: "941320959099",
  appId: "1:941320959099:web:91b2bcc22273d4ba105ede",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
