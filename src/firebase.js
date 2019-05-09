// Your web app's Firebase configuration
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";



var firebaseConfig = {
    apiKey: "AIzaSyB9vAn8BL8nxgmPkP63fy-Azy8wwZrZ_fs",
    authDomain: "react-code-talk.firebaseapp.com",
    databaseURL: "https://react-code-talk.firebaseio.com",
    projectId: "react-code-talk",
    storageBucket: "react-code-talk.appspot.com",
    messagingSenderId: "799283166689",
    appId: "1:799283166689:web:ce9161e97925bc4c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;