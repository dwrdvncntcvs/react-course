import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD4hIY1q99Db2HqsUU2aFr2V5MT6QAL4Qw",
  authDomain: "realistic-app-f3651.firebaseapp.com",
  databaseURL:
    "https://realistic-app-f3651-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "realistic-app-f3651",
  storageBucket: "realistic-app-f3651.appspot.com",
  messagingSenderId: "153146184318",
  appId: "1:153146184318:web:e46b075c43492c0bc73e2f",
};

const app = initializeApp(firebaseConfig);
