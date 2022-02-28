import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

import firebase from "firebase/app";

const config = {
  apiKey: "AIzaSyBYtwNnadDdStxW4UlAP4O8mcyLNCaQKWg",
  authDomain: "member-site-e9812.firebaseapp.com",
  projectId: "member-site-e9812",
  storageBucket: "member-site-e9812.appspot.com",
  messagingSenderId: "1088198469972",
  appId: "1:1088198469972:web:feb5f07ce22b5b40fbc0c1",
};

// initializeを複数回走らせない
if (firebase.apps.length === 0) {
  firebase.initializeApp(config);
}
const auth = firebase.auth();
export { auth };
const storage = firebase.storage();
export { storage };
export default firebase;
