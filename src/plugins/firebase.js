import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.VUE_APP_LWD_API_KEY,
  authDomain: process.env.VUE_APP_LWD_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_LWD_DATABASE_URL,
  projectId: process.env.VUE_APP_LWD_PROJECT_ID,
  storageBucket: process.env.VUE_APP_LWD_STORGAE_BUCKET,
  messagingSenderId: process.env.VUE_APP_LWD_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_LWD_APP_ID,
  measurementId: process.env.VUE_APP_LWD_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore();
const auth = firebase.auth();

const usersCollection = db.collection("users");
const postsCollection = db.collection("posts");
const commentsCollection = db.collection("comments");
const likesCollection = db.collection("likes");
const todosCollection = db.collection("todos");
const arbCollection = db.collection("arbs");

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection,
  todosCollection,
  arbCollection,
};
