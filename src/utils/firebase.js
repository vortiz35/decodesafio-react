// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCw71WJEGOQbFI74UUoBLFoiczl_tJLCSw",
  authDomain: "decodesafio-react.firebaseapp.com",
  projectId: "decodesafio-react",
  storageBucket: "decodesafio-react.appspot.com",
  messagingSenderId: "606256094729",
  appId: "1:606256094729:web:de55f6e0659d91f68da2d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Base de datos
export const db = getFirestore(app)