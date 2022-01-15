import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from './firebase/firebaseConfig';

export const addItemCart = async (data) => {
  const addItem = await addDoc(collection(db, 'itemCart'), { data });
};

export const getItemCart = async () => {
  const itemCartCol = collection(db, 'itemCart');
  const itemSnapshot = await getDocs(itemCartCol);
  const getItem = itemSnapshot.docs.map((doc) => doc.data());
  return getItem;
};

