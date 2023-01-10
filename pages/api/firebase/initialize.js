// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLYPKDc-qvs85cz5hGqXBYho9F966tc70",
  authDomain: "bookmymove-5d90f.firebaseapp.com",
  projectId: "bookmymove-5d90f",
  storageBucket: "bookmymove-5d90f.appspot.com",
  messagingSenderId: "271064015368",
  appId: "1:271064015368:web:88d726afda90b659eba7bd",
  measurementId: "G-F5G66KEQPB"
};

// Initialize Firebase
const fireInitial = initializeApp(firebaseConfig);
export default fireInitial
