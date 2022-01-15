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
  apiKey: 'AIzaSyBjNa0NX8szk73ydG8FAirodAfENeTGnms',
  authDomain: 'modulo3-39c75.firebaseapp.com',
  projectId: 'modulo3-39c75',
  storageBucket: 'modulo3-39c75.appspot.com',
  messagingSenderId: '1012309526832',
  appId: '1:1012309526832:web:9de73acd997b8d61d320f5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

