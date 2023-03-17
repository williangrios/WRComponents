// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnybq0trzA9sdTp165kntOY2ZrsoUoo4Q",
  authDomain: "web3projects-8427e.firebaseapp.com",
  projectId: "web3projects-8427e",
  storageBucket: "web3projects-8427e.appspot.com",
  messagingSenderId: "448536463378",
  appId: "1:448536463378:web:4372abcb3b09364dbfb0cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db= getFirestore(app);
export default app;