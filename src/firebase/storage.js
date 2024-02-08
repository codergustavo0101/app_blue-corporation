import firebase from "firebase/compat/app"
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDb1rQ-M2eBEawOFkKMtJEtQUuLPpugWU8",
  authDomain: "test-images-c9f7a.firebaseapp.com",
  projectId: "test-images-c9f7a",
  storageBucket: "test-images-c9f7a.appspot.com",
  messagingSenderId: "684160572238",
  appId: "1:684160572238:web:0d96c8b43049f2c0b95c1f",
  measurementId: "G-MSY7QWL1EF"

};

  // Initialize Firebase
  const storage = firebase.initializeApp(firebaseConfig);


export default storage