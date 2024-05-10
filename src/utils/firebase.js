// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwjtuDRnETxed8YKUbbbN8kucnus45j1U",
  authDomain: "pg-tut.firebaseapp.com",
  projectId: "pg-tut",
  storageBucket: "pg-tut.appspot.com",
  messagingSenderId: "99899219177",
  appId: "1:99899219177:web:995ed7e127ee69c2956478",
  databaseURL : "https://pg-tut-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);