// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZh-IW4kivQDo0j6jXAGoZ29EnG53tQw0",
  authDomain: "contact-vite-app.firebaseapp.com",
  projectId: "contact-vite-app",
  storageBucket: "contact-vite-app.appspot.com",
  messagingSenderId: "1027128800006",
  appId: "1:1027128800006:web:5873d27ac37f0a908e2487",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
