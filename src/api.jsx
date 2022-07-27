import { async } from '@firebase/util';
import { collection, doc, addDoc, getDocs, deleteDoc } from 'firebase/firestore';
import { db } from './firebase/firebaseConfig';

export const addItemCart = async (data) => {
  const addItem = await addDoc(collection(db, 'itemCart'), { data });
};

export const DeleteItemCart = async (id) => {
  await deleteDoc(doc(db, 'itemCart', id));
};

export const getItemCart = async () => {
  const itemCartCol = collection(db, 'itemCart');
  const itemSnapshot = await getDocs(itemCartCol);
  const getItem = itemSnapshot.docs.map((doc) => doc.data());
  return getItem;
};

