// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCINBVRHJCXPH9C3dvoP7H2Fgmy52kuoH0",
  authDomain: "my-portfolio-app-fa81f.firebaseapp.com",
  projectId: "my-portfolio-app-fa81f",
  storageBucket: "my-portfolio-app-fa81f.appspot.com",
  messagingSenderId: "606382508890",
  appId: "1:606382508890:web:aeed632d626b42866a8163",
  measurementId: "G-PZQQR2TDL3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const FirestoreDB = getFirestore(app);
const analytics = getAnalytics(app);