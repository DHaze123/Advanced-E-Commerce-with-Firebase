import {
  collection,
  getDocs,
  query,
  where
} from "firebase/firestore";

import { db } from "../firebase";

export const getProducts = async () => {
  const snapshot = await getDocs(collection(db, "products"));

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

export const getProductsByCategory = async category => {
  const q = query(
    collection(db, "products"),
    where("category", "==", category)
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

export const getCategories = async () => {
  const snapshot = await getDocs(collection(db, "products"));

  const categories = snapshot.docs.map(
    doc => doc.data().category
  );

  return [...new Set(categories)];
};