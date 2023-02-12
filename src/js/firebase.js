// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAM-GoQm2C2OW1Di7l9YUVW2cSxlJI2Hps",
  authDomain: "notesmaker-974ac.firebaseapp.com",
  projectId: "notesmaker-974ac",
  storageBucket: "notesmaker-974ac.appspot.com",
  messagingSenderId: "655119308404",
  appId: "1:655119308404:web:e6c01b3850ab97abdf2321"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const auth = getAuth(app);

export{
    db, auth
}