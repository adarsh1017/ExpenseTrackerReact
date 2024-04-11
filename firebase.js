import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyDzuEJwdCPwjeHNh7lDZ2F55_LoRHxcgBg",
    authDomain: "expense-tracker-15059.firebaseapp.com",
    projectId: "expense-tracker-15059",
    storageBucket: "expense-tracker-15059.appspot.com",
    messagingSenderId: "984497806329",
    appId: "1:984497806329:web:60df7797060a6608f47b28",
    measurementId: "G-BLVLLE95FH"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
