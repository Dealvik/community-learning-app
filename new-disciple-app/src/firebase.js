// import firebase from "../src/firebase";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlCP3CYeNbhach4L_a8Zh2tyd4FUUingQ",
  authDomain: "disciple-4fb5d.firebaseapp.com",
  projectId: "disciple-4fb5d",
  storageBucket: "disciple-4fb5d.appspot.com",
  messagingSenderId: "1067703206777",
  appId: "1:1067703206777:web:9e3b7ee0f596a70149a5a8",
  measurementId: "G-MZYG9DYNKD",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of videos from your database
async function getVideos(db) {
  const videosCol = collection(db, "videos");
  const videoSnapshot = await getDocs(videosCol);
  const videoList = videoSnapshot.docs.map((doc) => doc.data());
  return videoList;
}

export { db, getVideos };
