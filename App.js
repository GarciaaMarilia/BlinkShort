// app.js

import firebase from "firebase/app";
import "firebase/auth";
import app from "./blinkshort-firebase-config-file";
import "firebase/firestore";

export const firestore = firebase.firestore(app);
export const auth = firebase.auth(app);
