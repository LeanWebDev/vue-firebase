import { initializeApp } from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDWI-RmpXMv2slufbOmIS1LmzRZEUQ4Jfs",
  authDomain: "lwd-db.firebaseapp.com",
  databaseURL: "https://lwd-db.firebaseio.com",
  projectId: "lwd-db",
  storageBucket: "lwd-db.appspot.com",
  messagingSenderId: "1011305604456",
  appId: "1:1011305604456:web:39a8e5be50b1b1adf862dd",
  measurementId: "G-DDLSWRF3YS",
};

const app = initializeApp(firebaseConfig);

export const db = app.firestore();
export const todosCollection = db.collection("todos");
