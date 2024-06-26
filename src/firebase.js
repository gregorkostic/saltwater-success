import { initializeApp } from "firebase/app";
import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
  reauthenticateWithCredential,
  updatePassword,
  EmailAuthProvider,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  deleteDoc,
  collection,
  query,
  where,
  getDocs,
  addDoc,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

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
  auth,
  db,
  storage,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
  reauthenticateWithCredential,
  updatePassword,
  EmailAuthProvider,
  doc,
  getDoc,
  setDoc,
  deleteDoc,
  collection,
  query,
  where,
  getDocs,
  addDoc,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
};
