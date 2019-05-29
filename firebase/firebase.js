// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
var firebaseConfig = {
    apiKey: "AIzaSyD7XrnvG2BLh5kd9ufb1qLyFntzja5vxrQ",
    authDomain: "subs-manager.firebaseapp.com",
    databaseURL: "https://subs-manager.firebaseio.com",
    projectId: "subs-manager",
    storageBucket: "subs-manager.appspot.com",
    messagingSenderId: "525391698920",
    appId: "1:525391698920:web:baa9b8ec59a50b21"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);