import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_firebase_api,
  authDomain: "autoz-8611b.firebaseapp.com",
  projectId: "autoz-8611b",
  storageBucket: "autoz-8611b.appspot.com",
  messagingSenderId: "772790538317",
  appId: "1:772790538317:web:892b1f1a55996380248c04",
  measurementId: "G-BEYYHZ0KFZ"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const fromMillis = firebase.firestore.Timestamp.fromMillis;                   //tells firestore to save timestamp on a document on server
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;

export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const STATE_CHANGED = firebase.storage.TaskEvent.STATE_CHANGED;               // for progress of file upload

export const increment = firebase.firestore.FieldValue.increment;
 
// Convert firestore Document to JSON
// @param {DocumentSnapshot} doc

export async function getUserWithUsername(username){

     const usersRef =  firestore.collection('users');
     const query = usersRef.where('username','==',username).limit(1);
     const userDoc = (await query.get()).docs[0];
     
     return userDoc;
}

export function postToJSON(doc) {
  const data = doc.data();
  return {
    ...data,
    // createdAt: data?.createdAt.toMillis() || 0,
    // updatedAt: data?.updatedAt.toMillis() || 0
  };
}