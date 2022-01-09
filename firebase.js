import firebase from 'firebase/compat/app';
import { getStorage, ref } from 'firebase/storage';
import 'firebase/compat/firestore';
import 'firebase/storage';
const firebaseConfig = {
  apiKey: 'AIzaSyDknlZ6ri6YeeTZi9NWj6B0_Nn643ANYZU',
  authDomain: 'facebook-2point0-f8a0d.firebaseapp.com',
  projectId: 'facebook-2point0-f8a0d',
  storageBucket: 'facebook-2point0-f8a0d.appspot.com',
  messagingSenderId: '532512826086',
  appId: '1:532512826086:web:710cce08807faea8bb5127',
};
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = getStorage();

export { db, storage };
