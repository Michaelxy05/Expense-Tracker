//import * as firebase from "firebase";

  // Initialize Firebase
 // var config = {
 //   apiKey: "AIzaSyAHEz-HgcH4mhme2bAPFaK7YUMHcLaLRuk",
  //  authDomain: "queenbelladrama.firebaseapp.com",
  //  databaseURL: "https://queenbelladrama.firebaseio.com",
    projectId: "queenbelladrama",
   // storageBucket: "queenbelladrama.appspot.com",
  //  messagingSenderId: "62006215142"
  //};
  //firebase.initializeApp(config);


//if (!firebase.apps.length) {
    firebase.initializeApp(config);
}







const db = firebase.database();
const auth = firebase.auth();

export { auth, db };