import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

// Initialize Firebase
let config = {
  apiKey: "AIzaSyBWywA3rqXxVl0kGsV2LZzdAWH19cc_-Ts",
  authDomain: "react-slack-clone-3b14d.firebaseapp.com",
  databaseURL: "https://react-slack-clone-3b14d.firebaseio.com",
  projectId: "react-slack-clone-3b14d",
  storageBucket: "react-slack-clone-3b14d.appspot.com",
  messagingSenderId: "205904860193"
};
firebase.initializeApp(config);

export default firebase;