import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
	apiKey: "AIzaSyB3LnyWhxdoA-JZs4Imizh6_9SZ9wmwuvw",
	authDomain: "linkedin-clone-naimat.firebaseapp.com",
	projectId: "linkedin-clone-naimat",
	storageBucket: "linkedin-clone-naimat.appspot.com",
	messagingSenderId: "478902514156",
	appId: "1:478902514156:web:2ab8596a8f3e71174050c9",
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = app.auth();

export { db, auth };
