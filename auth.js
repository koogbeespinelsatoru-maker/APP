import { auth } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

window.register = function () {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  if (pass.length !== 6) return alert("Code = 6 chiffres");

  createUserWithEmailAndPassword(auth, email, pass)
    .then(() => window.location.href = "home.html")
    .catch(e => alert(e.message));
};

window.login = function () {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, pass)
    .then(() => window.location.href = "home.html")
    .catch(() => alert("Erreur connexion"));
};
