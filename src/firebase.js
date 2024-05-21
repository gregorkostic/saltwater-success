// src/firebase.js

import { initializeApp } from "firebase/app";
import {
  getAuth,
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  addDoc,
  getDoc,
  setDoc,
  getDocs,
  collection,
  query,
  where,
  deleteDoc,
} from "firebase/firestore/lite";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAjFq6_3WOD4U4AK9znLm_JYJPhDd1mIjE",
  authDomain: "saltwater-success.firebaseapp.com",
  projectId: "saltwater-success",
  storageBucket: "saltwater-success.appspot.com",
  messagingSenderId: "251162312716",
  appId: "1:251162312716:web:2a18c32890b3b4021f6e29",
  measurementId: "G-J63S7FV622",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {
  app,
  auth,
  db,
  storage,
  doc,
  addDoc,
  getDoc,
  setDoc,
  getDocs,
  collection,
  query,
  where,
  deleteDoc,
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
  ref,
  uploadBytes,
  getDownloadURL,
};
