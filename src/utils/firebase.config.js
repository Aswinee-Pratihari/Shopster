// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeUXLwP4CtaRZIhpXkfv_knzTOPtLL2o4",
  authDomain: "clones-d2563.firebaseapp.com",
  projectId: "clones-d2563",
  storageBucket: "clones-d2563.appspot.com",
  messagingSenderId: "373807384657",
  appId: "1:373807384657:web:17ab923b4117c038651070"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export const auth=getAuth(app)
export const storage = getStorage(app);
export const db = getFirestore(app);
export default app