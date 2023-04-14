// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCuvJ5F8W7kRYLu975E4VIEg5H5Xqzz6f4",
  authDomain: "hotline-4cff1.firebaseapp.com",
  projectId: "hotline-4cff1",
  storageBucket: "hotline-4cff1.appspot.com",
  messagingSenderId: "540876180146",
  appId: "1:540876180146:web:81976bcddb1ace4f5d17ab"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()