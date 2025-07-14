// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGT06MTLx_pUajalxRsD2Qqa9nT_L3j6A",
  authDomain: "capstone-project-na-skillsu.firebaseapp.com",
  projectId: "capstone-project-na-skillsu",
  storageBucket: "capstone-project-na-skillsu.firebasestorage.app",
  messagingSenderId: "414783407942",
  appId: "1:414783407942:web:ba0e7de660d70e8c844747",
  databaseURL:
    "https://capstone-project-na-skillsu-default-rtdb.asia-southeast1.firebasedatabase.app",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app);
//export const database = getDatabase(app);
export const realTimeDatabase = getDatabase(app);
