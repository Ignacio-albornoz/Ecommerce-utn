import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const createUser = (auth, email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
      const { user } = userCredential;
    // ..
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    // ..
    });
};

const firebaseConfig = {
  apiKey: "AIzaSyC34iy-m4CB0lBxBW0vn3qJgpskW_pmGf0",
  authDomain: "ecommerce-64d6e.firebaseapp.com",
  projectId: "ecommerce-64d6e",
  storageBucket: "ecommerce-64d6e.appspot.com",
  messagingSenderId: "423445091046",
  appId: "1:423445091046:web:9428d628b8f8bf81512127"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

