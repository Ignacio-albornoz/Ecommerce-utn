import { async } from '@firebase/util';
import { collection, addDoc, getDocs, deleteDoc, query, where } from 'firebase/firestore';
import { db } from './firebase/firebaseConfig';

export const addItemCart = async (data) => {
  const addItem = await addDoc(collection(db, 'itemCart'), { data });
};

export const DeleteItemCart = async (data) => {
  const deleteItem = await deleteDoc(collection(db, 'itemCart'), { data });
};

export const getItemCart = async () => {
  const itemCartCol = collection(db, 'itemCart');
  const itemSnapshot = await getDocs(itemCartCol);
  const getItem = itemSnapshot.docs.map((doc) => doc.data());
  return getItem;
};

export const getItemCartForEmail = async (email) => {
  const q = query(collection(db, 'itemCart'), where('user', '==', email, 'n@gmail.com'));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, ' => ', doc.data());
  });
};

export const getItemCartForEmail2 = async (email) => {
  const querySnapshot = await getDocs(collection(db, 'itemCart'));

  querySnapshot.forEach((doc) => {
    const data = doc.data();
    data.data.user.email === email ? console.log(data.data) : null;
    return data.data.user.email === email ? data.data : null;

  });
};
