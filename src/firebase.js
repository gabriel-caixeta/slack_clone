import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyACVcO_mtht0hYcxsIpvJmnBE2OtonPEP0",
    authDomain: "slack-clone-6ee77.firebaseapp.com",
    projectId: "slack-clone-6ee77",
    storageBucket: "slack-clone-6ee77.appspot.com",
    messagingSenderId: "911257892018",
    appId: "1:911257892018:web:c602a0d91b5fb96cb645ab"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };