import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAjFq6_3WOD4U4AK9znLm_JYJPhDd1mIjE",
  authDomain: "saltwater-success.firebaseapp.com",
  projectId: "saltwater-success",
  storageBucket: "saltwater-success.appspot.com",
  messagingSenderId: "251162312716",
  appId: "1:251162312716:web:2a18c32890b3b4021f6e29",
  measurementId: "G-J63S7FV622",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

// Export required functions from firebase/auth
const {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
  reauthenticateWithCredential,
  updatePassword,
  EmailAuthProvider,
} = firebase.auth();

// Export required functions from firebase/firestore
const {
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
} = firebase.firestore();

// Export required functions from firebase/storage
const { ref, uploadBytes, getDownloadURL } = firebase.storage();

export {
  app,
  auth,
  db,
  storage,
  firebase, // Export firebase to use additional methods
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
  reauthenticateWithCredential,
  updatePassword,
  EmailAuthProvider,
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
  ref,
  uploadBytes,
  getDownloadURL,
};
