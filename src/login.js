const loginForm = document.querySelector(".loginForm");
let errorPopUp = document.querySelector(".errorPopUp");
let errorMessage = document.querySelector(".errorMessage");

import {initializeApp} from "firebase/app";
import {
  getAuth,
 signInWithEmailAndPassword,
 onAuthStateChanged
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




loginForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const email = loginForm.email.value
    const password = loginForm.password.value
    signInWithEmailAndPassword(auth,email,password)
    .then((cred) => {
      window.location.href = "Home.html"
    })
    .catch((err) => {
        errorPopUp.style.left = "50%"
       errorMessage.textContent = `${err.message}`
       setTimeout(() => {
        errorPopUp.style.left = "180%"
       },2000)
    })
})


// export const authChange = (auth) => {
//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       console.log(user);
//       // You can access the user here and perform any actions
//       // For example, you can redirect the user:
//       // window.location.replace("");
//     } else {
//       // Handle case when user is not logged in
//     }
//   });
// };