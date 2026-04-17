import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const chatBox = document.getElementById("chatBox");

const q = query(collection(db, "messages"), orderBy("time"));

onSnapshot(q, snap => {
  chatBox.innerHTML = "";
  snap.forEach(doc => {
    const div = document.createElement("div");
    div.textContent = doc.data().text;
    chatBox.appendChild(div);
  });
});

window.sendMessage = async function () {
  const msg = document.getElementById("msg");

  if (!msg.value) return;

  await addDoc(collection(db, "messages"), {
    text: msg.value,
    time: Date.now()
  });

  msg.value = "";
};
