// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAWWTpcmp3SFEy264TcbGGJwEzkIjob2s",
  authDomain: "webproject-6720f.firebaseapp.com",
  projectId: "webproject-6720f",
  storageBucket: "webproject-6720f.appspot.com",
  messagingSenderId: "107100610308",
  appId: "1:107100610308:web:f288c0b6eff9627e0aba51",
  measurementId: "G-KMNGP6CTEG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app
