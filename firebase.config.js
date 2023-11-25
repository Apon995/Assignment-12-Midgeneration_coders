import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyDWas1Ia-5s6B_cbkpaMLoHhz-S-alOsPQ",
  authDomain: "midgenerationcoders.firebaseapp.com",
  projectId: "midgenerationcoders",
  storageBucket: "midgenerationcoders.appspot.com",
  messagingSenderId: "228281682704",
  appId: "1:228281682704:web:82ef62d366afed909df395",
  measurementId: "G-09V87M8NMW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
