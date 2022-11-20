import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCNmPlW8atUz_J7u1CCCX1Xvo9GwTb71S0",
    authDomain: "agronomy4u-723d6.firebaseapp.com",
    projectId: "agronomy4u-723d6",
    storageBucket: "agronomy4u-723d6.appspot.com",
    messagingSenderId: "486688274013",
    appId: "1:486688274013:web:5d14b81cfe2530ff543fb4",
    measurementId: "G-SY237RYRFM",
};

firebase.initializeApp(firebaseConfig);


export default firebase;