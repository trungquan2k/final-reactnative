import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyAIBWaOILGx3PV_YDYuDKWBit71JiVL9gU",
    authDomain: "final-reactnative.firebaseapp.com",
    projectId: "final-reactnative",
    storageBucket: "final-reactnative.appspot.com",
    messagingSenderId: "1028512996049",
    appId: "1:1028512996049:web:0c6cdf04b4128f9496c3f0",
    measurementId: "G-GFNXE9RD2S"
};


// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
}else {
    app = firebase.app();
}
const db = app.firestore();
const auth = firebase.auth();

export { db, auth };