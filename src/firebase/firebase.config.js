// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCVDXSvxAl100t31NtYUBIx4fxKflKMGKk",
    authDomain: "edu-tech-website.firebaseapp.com",
    projectId: "edu-tech-website",
    storageBucket: "edu-tech-website.appspot.com",
    messagingSenderId: "106620785492",
    appId: "1:106620785492:web:b9cf5d69495607cff92ec1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
