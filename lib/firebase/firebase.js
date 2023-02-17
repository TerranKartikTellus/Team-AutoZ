import firebase from 'firebase/app';
import 'firebase/storage';


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

const storage = firebase.storage();
const storageRef = storage.ref();

export { storageRef };