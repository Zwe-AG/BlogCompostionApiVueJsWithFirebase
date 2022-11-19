import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBO9K5C7uqREJ8yGkHXCzNTpmBrGR5sqYk",
  authDomain: "vue-blog-system-c5da6.firebaseapp.com",
  projectId: "vue-blog-system-c5da6",
  storageBucket: "vue-blog-system-c5da6.appspot.com",
  messagingSenderId: "948963244492",
  appId: "1:948963244492:web:f78b40ae0ed718cf10c569"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// database setup
let db=firebase.firestore();
let timestamp = firebase.firestore.FieldValue.serverTimestamp
export {db,timestamp};