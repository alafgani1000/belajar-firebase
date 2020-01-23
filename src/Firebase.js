import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

var config = {
    apiKey: "AIzaSyBNIoe8q_WysQA0becCYAGoGMz9kvrTYpE",
    authDomain: "todo-app-pro.firebaseapp.com",
    databaseURL: "https://todo-app-pro.firebaseio.com",
    projectId: "todo-app-pro",
    storageBucket: "todo-app-pro.appspot.com",
    messagingSenderId: "35497256789",
    appId: "1:35497256789:web:20521997b7c3cf46faf1dc",
    measurementId: "G-8VMGJ007P1"
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.analytics();

firebase.firestore().settings(settings);

export default firebase;