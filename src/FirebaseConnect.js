import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAPTEthIf2AnTpKkzFS4orM3Se6BNeVAM8",
  authDomain: "book-manage-d2e21.firebaseapp.com",
  databaseURL: "https://book-manage-d2e21.firebaseio.com",
  projectId: "book-manage-d2e21",
  storageBucket: "book-manage-d2e21.appspot.com",
  messagingSenderId: "466055600700",
  appId: "1:466055600700:web:54eebd55b545530b"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);