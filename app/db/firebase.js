import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQQ4HJLT-Gxy14ysXciULY57aP8P9mdic",
  authDomain: "tsarasera-f501c.firebaseapp.com",
  projectId: "tsarasera-f501c",
  storageBucket: "tsarasera-f501c.appspot.com",
  messagingSenderId: "667198132588",
  appId: "1:667198132588:web:70059bd66ea4c20a392349",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
