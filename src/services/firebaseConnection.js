
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCnybq0trzA9sdTp165kntOY2ZrsoUoo4Q",
    authDomain: "web3projects-8427e.firebaseapp.com",
    projectId: "web3projects-8427e",
    storageBucket: "web3projects-8427e.appspot.com",
    messagingSenderId: "448536463378",
    appId: "1:448536463378:web:4372abcb3b09364dbfb0cb"
};

const app = initializeApp(firebaseConfig);

export const db= getFirestore(app);
export default app;