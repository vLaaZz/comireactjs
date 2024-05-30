// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDItBv_rxVh6_O5vzosqvP3kvFWk8ihn2o",
  authDomain: "gamingstore0512.firebaseapp.com",
  projectId: "gamingstore0512",
  storageBucket: "gamingstore0512.appspot.com",
  messagingSenderId: "600554394112",
  appId: "1:600554394112:web:31c8eb832f85517d937ee5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);