import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AdrTqXHonFYrbWTCCqHVR8iYVf1kJKTdo4f21IHDnlWzX7-c-RpLkV2h2pKNxnwVNQEtGbxYiccyGV9tuJ0s9pZugVo0lsogFlIHLbQGO_HEjfA5mSewDnGPIONM7O4jpPlud1YeGqqoqNcKzYU0xc8Z4lA",
  authDomain: "https://console.firebase.google.com/u/0/project/flutter-ai-playground-1d8a4/phoneverification/usage/current-billing",
  projectId: "mycoress",
  storageBucket: "mycoress.appspot.com",
  messagingSenderId: "XXXX",
  appId: "XXXX"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
