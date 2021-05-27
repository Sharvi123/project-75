import firebase from 'firebase';

require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCqBWCsq6exlPzrtrtzMLafU_b1pZnLWL4",
    authDomain: "story-hub-69bc0.firebaseapp.com",
    databaseURL: "https://story-hub-69bc0-default-rtdb.firebaseio.com",
    projectId: "story-hub-69bc0",
    storageBucket: "story-hub-69bc0.appspot.com",
    messagingSenderId: "147133162024",
    appId: "1:147133162024:web:12312d8e99966be52e4b1d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()