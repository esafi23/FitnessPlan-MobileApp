import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDslE4bCzvETXGJgjM2gBbS7Ni8IKBdmIw",
  authDomain: "fitnessplanapp-b1d56.firebaseapp.com",
  projectId: "fitnessplanapp-b1d56",
  storageBucket: "fitnessplanapp-b1d56.appspot.com", // ✅ fixed typo here!
  messagingSenderId: "148423993400",
  appId: "1:148423993400:web:be305ed68678a741c0decd"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
