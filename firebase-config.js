// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyA5bE2mitmkEanTFILKX6GetTjMFnUvItw",
  authDomain: "parthen-geo-attend.firebaseapp.com",
  projectId: "parthen-geo-attend",
  storageBucket: "parthen-geo-attend.firebasestorage.app",
  messagingSenderId: "299355899956",
  appId: "1:299355899956:web:4b6d4ab0b582fc1a3ba261",
  measurementId: "G-BL53HGJ8S0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

console.log("Firebase initialized successfully.");

export { db, auth, analytics, firebaseConfig };
