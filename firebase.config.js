import { initializeApp } from "firebase/app";

import.meta.env.VITE_apiKey;
const firebaseConfig = {
  apiKey: "AIzaSyCSU2Ze6vHl0ieq1W5YVZ5fG7cy4FQhyMg",
  authDomain: "special-jp-chef.firebaseapp.com",
  projectId: "special-jp-chef",
  storageBucket: "special-jp-chef.appspot.com",
  messagingSenderId: "322721568950",
  appId: "1:322721568950:web:d771b590891f0d536f6e17"
};

const app = initializeApp(firebaseConfig);
export default app;