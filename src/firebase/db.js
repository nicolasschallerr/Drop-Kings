import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
  addDoc,
} from "firebase/firestore";
import { app } from "./config";

const db = getFirestore(app);

export const getItems = async () => {
  const querySnapshot = await getDocs(collection(db, "items"));
  const items = [];

  querySnapshot.forEach((doc) => {
    items.push(doc.data());
  });

  return items;
};

export const getCategoryItems = async (id) => {
  const q = query(collection(db, "items"), where("category", "==", id));
  const items = [];
  const querySnapShot = await getDocs(q);
  querySnapShot.forEach((doc) => {
    items.push(doc.data());
  });

  return items;
};

export const getDetail = async (id) => {
  const docRef = doc(db, "items", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("No such document!");
  }
};

export const createOrder = async (order) => {
  try {
    const docRef = await addDoc(collection(db, "orders"), order);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Errod adding document: ", e);
  }
};
