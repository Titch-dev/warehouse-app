// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";  // to uncomment on deploy

if (!process.env.NEXT_PUBLIC_FIREBASE_API_KEY) {
    console.error('Missing Firebase API Key!');
  }
  
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
//   measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID  // to uncomment on deploy
};

// Init Firebase
const app = initializeApp(firebaseConfig);

// Init Auth
const warehouseAuth = getAuth(app);

// Init Firestore
const warehouseDB = getFirestore(app);


export { warehouseAuth, warehouseDB };

// const analytics = getAnalytics(app);  // to uncomment on deploy
