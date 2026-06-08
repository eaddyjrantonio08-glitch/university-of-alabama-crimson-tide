import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDyWgsYhq6nZ06lRw65nTeoi9GAeiJCatk",
  authDomain: "alabama-crimson-tide-rp.firebaseapp.com",
  projectId: "alabama-crimson-tide-rp",
  storageBucket: "alabama-crimson-tide-rp.firebasestorage.app",
  messagingSenderId: "725384248300",
  appId: "1:725384248300:web:aa3dc1d839c185bbd79ec9",
  measurementId: "G-CHDTFJYJWX"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
