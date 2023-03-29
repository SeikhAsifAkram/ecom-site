// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth,
        signInWithRedirect,
        signInWithPopup,
        GoogleAuthProvider 
        }from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQVpnJZCU9HtpKz-h9AiPrm2JLh3qPIdQ",
  authDomain: "ecommerce-db-13fba.firebaseapp.com",
  projectId: "ecommerce-db-13fba",
  storageBucket: "ecommerce-db-13fba.appspot.com",
  messagingSenderId: "373934791043",
  appId: "1:373934791043:web:b4bae6154ef4ca611e7eb6"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider;

provider.setCustomParameters({
    prompt : "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserAuthFromDocument = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if(!userSnapshot.exists()){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try{
      await setDoc(userDocRef ,{
        displayName,
        email,
        createdAt,
      })
      
    }catch(error){
      console.log("error creating the user " + error.message);
    }
  }

  return userDocRef;
}