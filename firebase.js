import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCwK2F4lELo6EFwZ-cf8Rf0Une0URdz5PE",
  authDomain: "sinatopup.firebaseapp.com",
  projectId: "sinatopup",
  storageBucket: "sinatopup.firebasestorage.app",
  messagingSenderId: "61380562223",
  appId: "1:61380562223:web:03ae5e174af40c22ed65da"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
