// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvkELtdfNZg6IwdQ-k7phge1lwrV_-5Hg",
  authDomain: "grocery-project-8bb06.firebaseapp.com",
  projectId: "grocery-project-8bb06",
  storageBucket: "grocery-project-8bb06.appspot.com",
  messagingSenderId: "656022833644",
  appId: "1:656022833644:web:0af964602aba53fe2358c9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
