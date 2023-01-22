import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBU9ZNWCxpUIuND5AC84RZo9bofiQN4y9E",
  authDomain: "riders-panel-breakaway.firebaseapp.com",
  projectId: "riders-panel-breakaway",
  storageBucket: "riders-panel-breakaway.appspot.com",
  messagingSenderId: "77910270163",
  appId: "1:77910270163:web:ce078953354614ba1b3426",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
