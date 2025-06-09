// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAPthFLnTSAGr1err9L86gyfC1RejitSc",
  authDomain: "go-planeje.firebaseapp.com",
  projectId: "go-planeje",
  storageBucket: "go-planeje.firebasestorage.app",
  messagingSenderId: "896563863599",
  appId: "1:896563863599:web:cabc55f77a1308e0c7a6da",
  measurementId: "G-V3YG93SGB0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth };
