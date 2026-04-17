import { storage } from "./firebase.js";
import {
  ref,
  uploadBytes,
  getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

window.uploadFile = async function () {
  const file = document.getElementById("file").files[0];

  if (!file) return alert("Choisis un fichier");

  const fileRef = ref(storage, "uploads/" + file.name);

  await uploadBytes(fileRef, file);

  const url = await getDownloadURL(fileRef);

  alert("Upload réussi : " + url);
};
