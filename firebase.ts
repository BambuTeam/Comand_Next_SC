// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB9RoASPesd3CmGExeaXfguUD_CzUsHxdw",
  authDomain: "bambu-comandas.firebaseapp.com",
  projectId: "bambu-comandas",
  storageBucket: "bambu-comandas.appspot.com",
  messagingSenderId: "1070920805870",
  appId: "1:1070920805870:web:998c11979b64429531f2ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {auth}