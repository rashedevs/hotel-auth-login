// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAtXLmIe09pdFKVYCS5my5KakwQaUZPMtk",
    authDomain: "hotel-auth-login.firebaseapp.com",
    projectId: "hotel-auth-login",
    storageBucket: "hotel-auth-login.appspot.com",
    messagingSenderId: "592960597934",
    appId: "1:592960597934:web:322ce97957ab9ed354623f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;