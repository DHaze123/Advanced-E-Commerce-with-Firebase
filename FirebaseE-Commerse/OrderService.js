import {
  collection,
  addDoc,
  serverTimestamp
} from "firebase/firestore";

import { db } from "../firebase";

export const createOrder = async (
  cartItems,
  total
) => {
  const order = {
    items: cartItems,
    total,
    createdAt: serverTimestamp()
  };

  const docRef = await addDoc(
    collection(db, "orders"),
    order
  );

  return docRef.id;
};