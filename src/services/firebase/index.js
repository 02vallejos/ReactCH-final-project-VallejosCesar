// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBqaoUSu7Kw8l4DsZQi29NUmQq44fx5nn0",
//   authDomain: "ecommerce-63375.firebaseapp.com",
//   projectId: "ecommerce-63375",
//   storageBucket: "ecommerce-63375.firebasestorage.app",
//   messagingSenderId: "672632937576",
//   appId: "1:672632937576:web:5bcd153d69512524d22fdd"
// };

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);