import {login} from "./"
const logout = document.querySelector(".logOut");
const emailTag = document.querySelector(".emailTag");
const passwordTag = document.querySelector(".passwordTag")
// import { authChange } from './login.js';
// import { getAuth } from 'firebase/auth';





import {initializeApp} from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signOut
} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDJvn_GqogsJU3XE1SXlBgFVbi4bEPUd0w",
  authDomain: "fir-9-dojo-4da5d.firebaseapp.com",
  projectId: "fir-9-dojo-4da5d",
  storageBucket: "fir-9-dojo-4da5d.appspot.com",
  messagingSenderId: "250392842527",
  appId: "1:250392842527:web:ac688b160693fce282e02a"
};

// initialized firebase
initializeApp(firebaseConfig);

// adding auth
const signOutAuth = getAuth();

onAuthStateChanged(signOutAuth, (user) => {
  if (user) {
    const [f1] = user.providerData
    const {dispalyName,email,phoneNumber,photoURL,providerId,uid} = f1
    emailTag.textContent = `${email}`;
    passwordTag.textContent = `${providerId}`
  } else {
    
  }
});

logout.addEventListener("click", () => {
  signOut(signOutAuth)
  .then(() => {
    window.location.href = "login.html"
  })
  .catch((err) => {
    console.log(err.message);
  })
})



// const auth = getAuth();

// console.log(authChange(auth))