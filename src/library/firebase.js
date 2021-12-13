// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBr7OlIUe9TnAz7duGwf6o9RP9ohKbth1A",
  authDomain: "star-wars-weapons-info.firebaseapp.com",
  projectId: "star-wars-weapons-info",
  storageBucket: "star-wars-weapons-info.appspot.com",
  messagingSenderId: "85958370540",
  appId: "1:85958370540:web:ed2e8980fb17ff4386b1c9",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
