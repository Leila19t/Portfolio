import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection} from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyCDbxrhQES0yW6ynO91ChobQ3VmniLftH4",
  authDomain: "portfolio-dee0a.firebaseapp.com",
  projectId: "portfolio-dee0a",
  storageBucket: "portfolio-dee0a.appspot.com",
  messagingSenderId: "810741076286",
  appId: "1:810741076286:web:8a3501b388a98cd8e19c6f"
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app)

export const pushMessage = (messageObj) => {
    const messagesRef = collection(database, 'Messages')
    return addDoc(messagesRef,messageObj);
};