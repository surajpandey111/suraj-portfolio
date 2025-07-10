import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDT3VY0LiU930M_h5mc-ls7TBggn-6qMW0",
  authDomain: "suraj-portfolio-61093.firebaseapp.com",
  projectId: "suraj-portfolio-61093",
  storageBucket: "suraj-portfolio-61093.appspot.com",
  messagingSenderId: "935353829239",
  appId: "1:935353829239:web:6fc7c034b43df37a350372",
  measurementId: "G-KQNTQDMZZ5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
