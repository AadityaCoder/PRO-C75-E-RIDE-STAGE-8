import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyA7v4xe4Nk809Lsx-Ov3qWDb3fCnBx5BuA",
  authDomain: "pro-c-71-e-ride-stage-4.firebaseapp.com",
  projectId: "pro-c-71-e-ride-stage-4",
  storageBucket: "pro-c-71-e-ride-stage-4.appspot.com",
  messagingSenderId: "552425066029",
  appId: "1:552425066029:web:43f6b04adc5abc6440b2a4"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
