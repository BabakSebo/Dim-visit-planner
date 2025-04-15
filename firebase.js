// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, get, child, update } from "firebase/database"; // Correct import for database

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8ejDjguVQTetcN_cjbza4HtJcXlQEQQQ",
  authDomain: "dim-calendar.firebaseapp.com",
  databaseURL: "https://dim-calendar-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "dim-calendar",
  storageBucket: "dim-calendar.firebasestorage.app",
  messagingSenderId: "608840256884",
  appId: "1:608840256884:web:c2cae56d5e85981eb27021",
  measurementId: "G-YM6BGBWJH4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app); // Initialize the Firebase Realtime Database

const analytics = getAnalytics(app);

export { app, database, ref, set, get, child, update };
