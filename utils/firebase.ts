// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.APP_APIKEY,
  authDomain: process.env.APP_AUTHDOMAIN,
  projectId: process.env.APP_PROJECTID,
  storageBucket: process.env.APP_STORAGEBUKET,
  messagingSenderId: process.env.APP_MESSAGESENDERID,
  appId: process.env.APP_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
