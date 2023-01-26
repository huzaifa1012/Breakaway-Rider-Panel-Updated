import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJ2z-Husd-0cj8IzHyH6K8IJaS0K5w15k",
  authDomain: "breakaway-93eaa.firebaseapp.com",
  projectId: "breakaway-93eaa",
  storageBucket: "breakaway-93eaa.appspot.com",
  messagingSenderId: "982366355893",
  appId: "1:982366355893:web:9d10de9a9437d61c6f99fc",
  measurementId: "G-3B1QG8MPEH"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

