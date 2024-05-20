import firebase from "firebase/compat/app";
import {
  doc,
  addDoc,
  getDoc,
  setDoc,
  getDocs,
  getFirestore,
  collection,
  query,
  where,
  deleteDoc,
} from "firebase/firestore/lite";
import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
} from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyAjFq6_3WOD4U4AK9znLm_JYJPhDd1mIjE",
  authDomain: "saltwater-success.firebaseapp.com",
  projectId: "saltwater-success",
  storageBucket: "saltwater-success.appspot.com",
  messagingSenderId: "251162312716",
  appId: "1:251162312716:web:2a18c32890b3b4021f6e29",
  measurementId: "G-J63S7FV622",
};

//firebase.initializeApp(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

export {
  app,
  auth,
  storage,
  db,
  getAuth,
  doc,
  getDoc,
  setDoc,
  addDoc,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
  ref,
  uploadBytes,
  getDownloadURL,
  signOut,
  collection,
  query,
  getDocs,
  where,
  deleteDoc,
};
