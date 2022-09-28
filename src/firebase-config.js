import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDVhQiytMN3ZAcEBgrV3VJAGAdvptWZOJY",
  authDomain: "fir-tutorial-backend.firebaseapp.com",
  projectId: "fir-tutorial-backend",
  storageBucket: "fir-tutorial-backend.appspot.com",
  messagingSenderId: "720449688809",
  appId: "1:720449688809:web:d7ea4af2a9857d5c40cc78",
  measurementId: "G-BCSVLL06S2"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);