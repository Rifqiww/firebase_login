// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBSQJTQ8YIZlns6FhREyY5uYnCve2UU_iQ",
    authDomain: "firestore-db-84a81.firebaseapp.com",
    projectId: "firestore-db-84a81",
    storageBucket: "firestore-db-84a81.firebasestorage.app",
    messagingSenderId: "30769211295",
    appId: "1:30769211295:web:8863f6b9012270d40c7faa",
    measurementId: "G-3KZMXSYD6B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);