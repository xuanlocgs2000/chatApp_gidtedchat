import  firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
var firebaseConfig = {
    apiKey: "AIzaSyAVrnrGB15h3_n8bD7OMZi6EJarS6Gnohg",
    authDomain: "chatmodule-96616.firebaseapp.com",
    projectId: "chatmodule-96616",
    storageBucket: "chatmodule-96616.appspot.com",
    messagingSenderId: "1055670268908",
    appId: "1:1055670268908:web:77359d776274caa30f06c9"
};
let app;
if (firebase.apps.length===0) {
     app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}
const db = app.firestore();
const auth = firebase.auth();
export { db, auth };