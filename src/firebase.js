import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC2D0wk5PR3g8d2vIhWJ9Vr-bKmQfZ6qd4",
  authDomain: "linkedin-clone-yt-e1f69.firebaseapp.com",
  projectId: "linkedin-clone-yt-e1f69",
  storageBucket: "linkedin-clone-yt-e1f69.appspot.com",
  messagingSenderId: "195073366489",
  appId: "1:195073366489:web:37517514bd87c637c261c8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
