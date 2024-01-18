// blinkshort-firebase-config-file.js

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth"; 


const firebaseConfig = {
 apiKey: "AIzaSyBeUqPyYJxOSKRk1dcGW3M0FKonfzlnKR0",
 authDomain: "blinkshort-4f6dc.firebaseapp.com",
 projectId: "blinkshort-4f6dc",
 storageBucket: "blinkshort-4f6dc.appspot.com",
 messagingSenderId: "128874598957",
 appId: "1:128874598957:web:bdd3b9a32027a852155ea4",
 measurementId: "G-HQ9MM24F6W",
};

const app = firebase.apps.length ? firebase.app() : firebase.initializeApp(firebaseConfig);

export default app; // Exporte o app para uso em outros arquivos
