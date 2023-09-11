import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD6piAEOSeVjwOlPXYbsfG31HjAXWiFOew",
  authDomain: "eyedoctor-9f57e.firebaseapp.com",
  projectId: "eyedoctor-9f57e",
  storageBucket: "eyedoctor-9f57e.appspot.com",
  messagingSenderId: "242937124615",
  appId: "1:242937124615:web:14084c50328af552d017a2",
  measurementId: "G-B9VJNGGGH3"
};


const app = initializeApp(firebaseConfig);
export const database = getAuth(app);
