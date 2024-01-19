// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBiiw28373mZwsPJaMxHVYJI66nJx5_yxQ",
    authDomain: "react-responsive-blog.firebaseapp.com",
    projectId: "react-responsive-blog",
    storageBucket: "react-responsive-blog.appspot.com",
    messagingSenderId: "74584440496",
    appId: "1:74584440496:web:1343f56d577788c4eac575",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
