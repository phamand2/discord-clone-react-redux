// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyDsab5w1d5oYWyLQ50yttsOSpngTPnYZ8E",
  authDomain: "discord-clone-react-redu-c33da.firebaseapp.com",
  projectId: "discord-clone-react-redu-c33da",
  storageBucket: "discord-clone-react-redu-c33da.appspot.com",
  messagingSenderId: "150270174277",
  appId: "1:150270174277:web:1ee1e098598588ca746f2c",
  measurementId: "G-D2KQ176EMZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;