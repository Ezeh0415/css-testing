const signUpForm = document.querySelector(".signUpForm");
let errorPopUp = document.querySelector(".errorPopUp");
let errorMessage = document.querySelector(".errorMessage");

import {initializeApp} from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
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
const auth = getAuth();

// adding sign up 

signUpForm.addEventListener("submit",(event) => {
    event.preventDefault();
    const email = signUpForm.email.value;
    const password = signUpForm.password.value;
    createUserWithEmailAndPassword(auth,email,password)
     .then((cred) => {
      console.log("user created",cred.user.email);
      window.Location.href = "Home.html";
      signUpForm.reset();
     })
     .catch((err) => {
       errorPopUp.style.left = "50%"
       errorMessage.textContent = `${err.message}`
       setTimeout(() => {
        errorPopUp.style.left = "180%"
       },2000)
     })
  })

  