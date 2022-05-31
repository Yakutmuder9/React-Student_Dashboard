import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBWW6hxP_xeJ_s__z5VZZmA8skYrhBnNBs",
  authDomain: "mydashbord-6734b.firebaseapp.com",
  projectId: "mydashbord-6734b",
  storageBucket: "mydashbord-6734b.appspot.com",
  messagingSenderId: "765717553133",
  appId: "1:765717553133:web:92aa05dca27e7455d9d1e4",
  measurementId: "G-00CT5V0YYX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;




