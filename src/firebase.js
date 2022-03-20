// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyCRcZuqE4huV7OpmtYarhmqacj3QGNIYiE",
  authDomain: "auth-development-9d406.firebaseapp.com",
  projectId: "auth-development-9d406",
  storageBucket: "auth-development-9d406.appspot.com",
  messagingSenderId: "88330000745",
  appId: "1:88330000745:web:2c84fa0cd620116769c5f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage(app);

// Storage Functions
