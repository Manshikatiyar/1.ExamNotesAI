
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "exam-f3fb2.firebaseapp.com",
  projectId: "exam-f3fb2",
  storageBucket: "exam-f3fb2.firebasestorage.app",
  messagingSenderId: "444788044141",
  appId: "1:444788044141:web:778c28fd9e32761400ea64"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}