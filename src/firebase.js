// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDYetJrRAPP5UDxR3FhcaKBuJFdbXfJ0RQ",
    authDomain: "linkedin-clone-a6eda.firebaseapp.com",
    projectId: "linkedin-clone-a6eda",
    storageBucket: "linkedin-clone-a6eda.appspot.com",
    messagingSenderId: "834145618412",
    appId: "1:834145618412:web:7ece056ba43467202958c9",
    measurementId: "G-LCBW5FVLB9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };