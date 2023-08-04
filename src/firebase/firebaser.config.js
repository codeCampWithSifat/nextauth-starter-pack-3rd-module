import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA0erVN7itf258qgHPrmFc-rGqTzVcN3IY",
  authDomain: "next-auth-starter-pack.firebaseapp.com",
  projectId: "next-auth-starter-pack",
  storageBucket: "next-auth-starter-pack.appspot.com",
  messagingSenderId: "988431743445",
  appId: "1:988431743445:web:c3a0ddbf82f49239fb255c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
